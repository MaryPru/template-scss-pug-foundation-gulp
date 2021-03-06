import { configFTP } from '../config/ftp.js';
import vinylFTP from 'vinyl-ftp';
import util from 'gulp-util';

export const ftp = () => {
    configFTP.log = util.log;
    const ftpContent = vinylFTP.create(configFTP);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(
        app.plugins
            .plumber(
                app.plugins.notify.onError({
                    title: 'FTP',
                    message: 'Error: <%= error.message %>',
                })
            )
            .pipe(ftpContent.dest(`/${app.path.ftp}/${app.path.rootFolder}`))
    );
};