const CUSTOMER_SITES = {
    bf: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: '暴風資源',
    },
    ry: {
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
        name: '如意資源',
    },
    ty: {
        api: 'https://tyyszy.com/api.php/provide/vod',
        name: '天涯資源',
    },
    360: {
        api: 'https://360zy.com/api.php/provide/vod',
        name: '360資源',
    },
    fy: {
        api: 'https://fengyunapi.com/api.php/provide/vod',
        name: '風雲資源',
    },
    fy: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台資源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
