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
            await DELETE.from(getVariant).where({ NAME: { '=': item.NAME } });
            await INSERT(item).into(getVariant);
        }
        if (flag === "delete") {
            const names = JSON.parse(req.data.items);
            names.forEach(async name => {
                await DELETE.from(getVariant).where({ NAME: { '=': name } });
            })
        }
        if (flag === "updateDefault") {
            const name = JSON.parse(req.data.items);
            await UPDATE`MY_VARIANT`.set`default =false`.where`default=true`;
            await UPDATE`MY_VARIANT`.set`default =true`.where`NAME=${name}`;
        }
        if (flag === "rename") {
            const renamed = JSON.parse(req.data.items);
            renamed.forEach(async obj => {
                await UPDATE`MY_VARIANT`.set`NAME =${obj.NAME}`.where`NAME=${obj.preName}`;
            })
        }
    })
}