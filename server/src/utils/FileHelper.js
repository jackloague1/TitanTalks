module.exports = class FileHelper {
	static writeFile(file, targetDir) {
		const { originalname, buffer } = file;
		
		// Create Directories & Filename 
		let dt = new Date();
		let basedir = 'public';
		let relativePath = `${targetDir}/${dt.getFullYear()}/${dt.getMonth() + 1}/${dt.getDate()}`;
		let directoryPath = `${basedir}/${relativePath}`;
		let filename = `${dt.getTime()}.${originalname.split('.').pop()}`;

		let fs = require('fs');
		if (!fs.existsSync(directoryPath)) {
			fs.mkdirSync(directoryPath, { recursive: true });
		}

		fs.writeFile(`${directoryPath}/${filename}`, buffer, (err) => {
			if (err) {
				throw err;
			}
		});
		return `${relativePath}/${filename}`;
	}
}