# 1.0.1

-   [localStorages] Novas funções: setItem, getItem, removeItem, checkLocalStorageExists
-   [validators] e [browsers] Move função isOnline para browsers
-   Add .babelrc
-   Build configurado
-   Altera investira.sdk para versão do npm
-   Add arquivos de estilo
-   [bindStateToLocalStorage] Novas funções: removeTemporaryAttr, removeLocalStoreStates, bind
-   [renders] Novas funções: resolvePropSize, resolvePropBlock, getTimeFromTextLength, setId, childrenWithProps, getEpicenterLeftTop, getEpicenter
-   [charts] Novas funções: getSeriesPointByKeyValue, getFirstPoint, getLastPoint, scaleLinear, square, scaleRadial, createDataSerie
-   [browsers] Novas funções: isSafari, isChrome, isWebView
-   [charts] Novas função: createDataSerie
-   [charts] Novas função: isGrowing
-   [displays] Novas função: formats, agencia, conta, cnpj

# 2.0.0

Toda a biblioteca foi reorganizada para comportar os componentes compartilhados das aplicações investira.

-   [components] Adicionados wrappers da material-ui e components do investira.vc
-   [lib] Adiciona novo bind do redux para o localstorage
-   [components] Avatar. Agora possui as propriedades size e color
-   [utils] Add função classList
-   [components] Add InfiniteScroller

# 2.1.0

-   [components] Muda a versão da Material-ui para 4.9.9

# 2.3.0

-   [components] Add LogReader
-   [adjustment] Corrige path dos import dos componentes
-   [adjustment] Corrige um probelma de compatibilidade do react-dev-utils
-   [components] SearchBox: Adiciona um trim apra remover os espaço em brando desnecessário
-   [components] ResponsiveImage: Exibe corretamente a imagem quando quebrada
-   [adjustment] Correções gerais no CSS
-   [adjustment] Mais alguns componentes convertidos para funcional
-   [lib] Add as funções cpf e cep a lib displays
-   [components] Add CopyToClipboard
-   [components] Select (deprecated). Será refatorado
-   [components] Add ContentList
-   [components] Add SSE
-   [lib] bindStateToLocalStorage, agora permite definir a chave
-   [components] Removido tamanho fixo de Icon
-   [components] Add Autocomplete
-   [components] Add Info, InfoBar, InfoDates
-   [components] Add ProgressBar
-   [components] Add IconDatePicker
-   [components] Add Divisor
-   [components] Atualiza o investira.sdk para 2.0.8
-   [hoc] Add withDialog, withRedux e infiniteScroller
-   [store] Nova lib "store"
-   [store] Add createStore e combineReducers

# 2.4.0

-   [lib] diretório store renomeado para redux
-   [storage] Add createStorage
-   [redux] Antigo combineReducers renomeado para combineReducersLegacy
-   [redux] Add novo combineReducers, createStore, persisterStore
-   [dep] Add dependencias redux-persist e redux-persist-pouchdb

# 2.5.0

-   [components] Add CrossTab
-   [components] Add ContainerList
-   [components] Add ListVirtual
-   [components] Add CrudContext
-   [components] Add CrudProvider
-   [components] Add CrudConsumer
-   [components] Add ListState
-   [components] Add Search
-   [components] Add ListFilter
-   [components] Add DeckContext
-   [components] Add DeckNavBar
-   [components] Add DeckNavigator
-   [components] Add DeckProvider
-   [components] Add DeckView
-   [components] Add Crud
-   [dep] Add dependencia react-virtualized

# 2.5.1

-   [lib] Add persistStore e pouchStorage
-   [components] Add PersistGate

# 2.5.2

-   [components] Add MaskedTextField
-   [lib] Refatora função agencia da lib displays

# 2.5.4

-   [lib] Add vibrate aos utils
-   [dep] Add dependencia idb
-   [lib] Add engine para redux-persit, idbStorage
