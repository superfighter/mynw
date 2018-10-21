const fileSystem = require('./fileSystem')
const userInterface = require('./userInterface')
const search = require('./search')
function main() {
    userInterface.binddocument(window);
    const folderPath = fileSystem.getUsersHomeFolder();
    
    // fileSystem.getFilesInFolder(folderPath, (err, files) => {
    //     if (err) {
    //         return alert('Sorry, we could not load your home folder.');
    //     }
    //     // files.forEach((file) => {
    //     //     console.log(`${folderPath}/${file}`);
    //     // })
    //     userInterface.inspectAndDescribeFiles(folderPath, files, userInterface.displayFiles);
    // });
    userInterface.loadDirectory(folderPath)(window)
    userInterface.bindSearchField(event => {
        const query = event.target.value;
        if (query == '') {
            userInterface.resetFilter();
        } else {
            search.find(query, userInterface.filterResults)
        }
    })
}

// main();
window.onload = main;