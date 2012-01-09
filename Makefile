DEVICE=usb
all: launch

package: uk.co.north52.tasks_1.0.0_all.ipk
	palm-package --exclude="packagefile.txt" .
install: package
	palm-install uk.co.north52.tasks_1.0.0_all.ipk -d $(DEVICE)
launch: install
	palm-launch -d $(DEVICE) uk.co.north52.tasks