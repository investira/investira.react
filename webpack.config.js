const fs = require('fs');

//Este plugin extrai CSS em arquivos separados. Cria um arquivo CSS por arquivo JS que contém CSS.
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Resolve o caminho do diretorio do sistema de arquivos
const path = require('path');

const webpack = require('webpack');

const packageInfo = require('./package.json');

// Diretório de saída
const outputPath = path.join(__dirname, 'ui');

// Diretório de entrada
const srcPath = path.join(__dirname, 'src');

// Diretório fonte dos componentes
//const componentsPath = path.join(srcPath, 'components');

const componentExternals = [];

// Ponto de entrada para gerar o build
const entryPoints = {
    index: './src/components/index.js'
};

// TODO: Estudar como gerar aqruivos separados com css único
/*
 * Pontos de entrada e saída.
 * Atribuir ao objeto entryPoints os paths de cada componente.
 * Atribui ao array componentExternals os novos paths de cada componente
 * */
// fs.readdirSync(componentsPath)
//     .filter(x => x !== '.DS_Store' && x !== 'index.js' && !x.match(/\.md/))
//     .forEach(component => {
//         entryPoints[component] = [`./src/components/${component}`];
//         componentExternals.push(`../${component}`);
//     });

/* Array com todas as refências necessárias para o build dos componentes
 * incluindo os próprios componentes
 * */
const externals = [].concat(Object.keys(packageInfo.dependencies));
//.concat(componentExternals);

module.exports = (env, argv) => {
    const isDevelopment = argv.mode === 'development';

    return {
        entry: entryPoints,
        output: {
            path: outputPath,
            filename: 'index.js',
            publicPath: '/ui/',
            library: packageInfo.name,
            libraryTarget: 'umd' //Permite que trabalhe com CommonJS, AMD e como variável global
        },
        resolve: {
            // alias: {
            //     react: path.resolve('./node_modules/react')
            // },
            modules: ['node_modules', path.resolve(__dirname, 'ui/index')],
            extensions: [
                '.scss',
                '.js',
                '.jsx',
                '.json',
                '.png',
                '.gif',
                '.jpg',
                '.svg'
            ]
        },
        externals,
        plugins: [
            new webpack.optimize.OccurrenceOrderPlugin(true),
            new MiniCssExtractPlugin({
                filename: isDevelopment ? '[name].css' : '[name].css'
                //chunkFilename: isDevelopment ? '[id].css' : '[id].css'
            })
            // new webpack.DefinePlugin({
            //     'process.env': {
            //         NODE_ENV: '"production"'
            //     }
            // })
        ],
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react']
                    },
                    include: srcPath
                },
                {
                    test: /\.module\.s(a|c)ss$/,
                    loader: [
                        isDevelopment
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName:
                                    '[folder]_[local]__[hash:base64:5]',
                                camelCase: true,
                                sourceMap: isDevelopment
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment
                            }
                        }
                    ]
                },
                {
                    test: /\.s(a|c)ss$/,
                    exclude: /\.module.(s(a|c)ss)$/,
                    loader: [
                        isDevelopment
                            ? 'style-loader'
                            : MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: isDevelopment
                            }
                        }
                    ]
                },
                {
                    test: /\.svg$/,
                    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
                }
            ]
        }
    };
};

// Resolve o caminho do diretorio do sistema de arquivos
// const path = require('path');

// console.log(path.resolve(__dirname));

// module.exports = {
//     mode: 'production',
//     entry: './lib/components/ScrollContainer/ScrollContainer.js',
//     module: {
//         rules: [
//             // Regras de tratamento do js/jsx
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader'
//                 }
//             },
//             // Regras de tratamento do scss/css
//             {
//                 test: /\.(css|scss)$/,
//                 use: [
//                     { loader: 'style-loader' },
//                     { loader: 'css-loader' },
//                     { loader: 'sass-loader' }
//                 ]
//             },
//             // Converte imagens para base64
//             {
//                 test: /\.(png|gif|jpg|svg)$/,
//                 use: {
//                     loader: 'url-loader',
//                     options: {
//                         limit: 50000
//                     }
//                 }
//             }
//         ]
//     },
//     resolve: {
//         modules: ['node_modules', path.resolve(__dirname, '')],
//         extensions: ['.scss', '.js', '.json', '.png', '.gif', '.jpg', '.svg']
//     },
//     output: {
//         path: path.resolve(__dirname, 'ui/'),
//         publicPath: '',
//         filename: 'index.js',
//         //library: 'Inv',
//         libraryTarget: 'umd'
//     }
// };
