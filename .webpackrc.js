const path = require('path')
export default {
    alias: {
        'components': path.resolve(__dirname, 'src/components/'),
        'utils': path.resolve(__dirname, 'src/utils/'),
        'config': path.resolve(__dirname, 'src/config/'),
        'services': path.resolve(__dirname, 'src/services/'),
        'models': path.resolve(__dirname, 'src/models/'),
        'styles': path.resolve(__dirname, 'src/styles/'),
        'layouts': path.resolve(__dirname, 'src/layouts/'),
        'assets': path.resolve(__dirname, 'src/assets/'),
        'pages': path.resolve(__dirname, 'src/pages/')
    },
    sass: {
        'node-sass': true
    }
}
