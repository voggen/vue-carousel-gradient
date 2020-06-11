> vue轮播图组件 简易版无缝渐变 开箱即用

## 注意事项

``` 
基于 vuecli4x 版本 需要sass 支持
```

## 参数配置

参数 | 是否必须 | 参数值 | 默认值
----|------|----|----
imgList | 是 | 图片数组 | 无


## 安装
项目入口文件（main.js）中引入
``` 
import Swiper from 'vue-carousel-gradient';
Vue.use(Swiper);
```

如何使用该组件？
``` 
<swiper-gradient :imgList="list"/>
```

``` 
list: [{
    url: 1.png,
    name: '示例图片'
}]
```
