module.exports = {
	app: {
        files: {
          'www/src/css/app.css': [
            'www/src/css/less/app.less'
          ]
        },
        options: {
          compile: true
        }
    },
    min: {
        files: {
            'demo/css/app.min.css': [
                'src/css/bootstrap.css',
                'src/css/*.css'
            ]
        },
        options: {
            compress: true
        }
    }
}