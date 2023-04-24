# Set the directory to "00-practice-app"
$dir='00-practice-app'
# Go into the directory
cd $dir
# Delete the src directory
rm -r ./src
# Go up one level
cd ..
# Get the directory name to move the src directory to from the command line
$dirName = Read-Host 'Please enter the directory name to move the src directory to'
# Go into the directory specified by the command line
cd $dirName
# Move the src directory to the specified directory
mv ./src $dir