# Automated Installation
# Feel free to "yarn install && yarn start" instead

clear
if [ ! -d node_modules ]
then
	echo "Installing Packages..."
	yarn install
	clear
	echo "Successfully installed all packages!"
else
	echo "Already installed packages."
fi
clear
if [ "$REPL_OWNER" == "RayhanADev" ]
then
	echo "Running development server."
	yarn dev
else
	echo "Running production server."
	yarn build && yarn start
fi