const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '影視工廠',
    }
    qiqi: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴風資源',
    }
    qiqi: {
        api: 'http://api.ffzyapi.com/api.php/provide/vod/from/feifan/at/xml',
        name: '非凡影視',
    }
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
