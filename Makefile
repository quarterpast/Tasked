DEVICE=usb
all: run

package:
	palm-package --exclude="packagefile.txt" .
install: package
	palm-install uk.co.north52.tasks_1.0.0_all.ipk -d $(DEVICE)
launch: install
	palm-launch -d $(DEVICE) uk.co.north52.tasks
run:
	palm-run . -d $(DEVICE)
