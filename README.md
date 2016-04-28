# vue-dialog

Dialog plugin for Vue.js.

The plugin provides services for pop dialog.

## Installation

Available through Bower.

```js
    bower install vue-dialog
```

##Direct include

If you are using Vue globally, just include vue-dialog.js and it will automatically install the Vue.dialog method.

##Usage

The same as vue.js.

###Add button
```js
 //vue
 Vue.dialog({
     data:{
         btn:[{
                 text:'confirm',
                 bind:'confirm'
             },
             {
                 text:'cancel',
                 bind: 'cancel' // In methods
             }
         ]
     }
 })
```

###Close Pop
```js
    cancel: function(){
        this.close();
    }
```
###Template

You can use any method with vue.js in the content field

```js
    data:{
        content:'<p>TEMPLATE</p>'
    }
    //or amd
    data:{
        content: require('xxx.html')
    }
```

###Dialog Name

```js
    data:{
        title:'xxx name'
    }
```

### Other, look to example
