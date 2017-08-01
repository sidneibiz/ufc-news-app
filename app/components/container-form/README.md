# ufc-news-app

## Componente Container-Form:
Componente utilizado para trazer uma lista de dados na qual poderá ter filtro ou detalhe. Conforme necessidade.
Deve-se de passar o parametro "type" como "detail" ou "filter" para trazer os dois tipos de visualização.

Em meu caso utilizei para trazer as Notícias das lutas(Utilizando o formato de visualização "detail") e para trazer os Lutadores (Utilizando o formato de visualização "filter").

## Type Detail:
```html
<container-form type="detail" primary="vm.primary" values="vm.news" view-detail="vm.viewDetail" buttons="vm.buttons"></container-form>
```

## Type Filter:
```html
<container-form type="filter" values="vm.fighters" input="vm.input" view-detail="vm.viewDetail" input-list="vm.class" model="vm.search"
    placeholder="Filter" placeholder-button="Class"></container-form>
```

## Contributors

**@author:** 'Sidnei Rafael Biz *< [sidneibiz@gmail.com](mailto:sidneibiz@gmail.com) >*'