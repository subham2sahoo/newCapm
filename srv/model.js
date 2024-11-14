const cds = require("@sap/cds");
const { getVariant } = cds.entities('myService');
module.exports = (srv) => {
    srv.on("saveVariant", async (req) => {
        const flag = req.data.flag;
        if (flag === "create") {
            const item = JSON.parse(req.data.items);
            if (item.DEFAULT)
                await UPDATE`MY_VARIANT`.set`DEFAULT = false`.where`APP_NAME=${item.APP_NAME}`
            item.USER = req.headers["x-username"];
            await INSERT(item).into(getVariant);
        }
        if (flag === "updateVariant") {
            const item = JSON.parse(req.data.items);
            await DELETE.from(getVariant).where({ NAME: item.NAME }).and({ APP_NAME: item.APP_NAME });
            await INSERT(item).into(getVariant);
        }
        if (flag === "delete") {
            const items = JSON.parse(req.data.items);
            items.forEach(async item => {
                await DELETE.from(getVariant).where({ NAME: item.NAME }).and({ APP_NAME: item.APP_NAME });
            })
        }
        if (flag === "updateDefault") {
            const item = JSON.parse(req.data.items);
            await UPDATE(getVariant).set({ DEFAULT: false }).where({ DEFAULT: true }).and({ APP_NAME: item.APP_NAME });
            await UPDATE(getVariant).set({ DEFAULT: true }).where({ NAME: item.NAME }).and({ APP_NAME: item.APP_NAME });
        }
        if (flag === "rename") {
            const renamed = JSON.parse(req.data.items);
            renamed.forEach(async obj => {
                await UPDATE`MY_VARIANT`.set`NAME =${obj.NAME}`.where`NAME=${obj.preName}`.and`APP_NAME=${obj.appname}`;
            })
        }
    })
}