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
    wl: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: '臥龍資源',
    },
    fy: {
        api: 'https://caiji.maotaizy.cc/api.php/provide/vod',
        name: '茅台資源',
    },
    jz: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: '極速資源',
    },
    db: {
        api: 'https://dbzy.tv/api.php/provide/vod',
        name: '豆瓣資源',
    },
    mz: {
        api: 'https://mozhuazy.com/api.php/provide/vod',
        name: '魔爪資源',
    },
    md: {
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
        name: '魔都資源',
    },
    zd: {
        api: 'https://api.zuidapi.com/api.php/provide/vod',
        name: '最大資源',
    },
    sk: {
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
        name: '櫻花資源',
    },
    wj: {
        api: 'https://api.wujinapi.me/api.php/provide/vod',
        name: '無盡資源',
    },
    ik: {
        api: 'https://ikunzyapi.com/api.php/provide/vod',
        name: 'iKun資源',
    },
    lz: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: '量子資源',
    },
    xmm: {
        api: 'https://zy.xmm.hk/api.php/provide/vod',
        name: '小貓咪資源',
    },
    ww: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: '旺旺短劇',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
