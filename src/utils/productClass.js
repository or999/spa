// 创建一个生成产品数据的类。
class Product {
    constructor(id, type, online, status) {
        this.id = id
        this.type = type || '3'
        this.name = "HNJS-00" + id
        this.address = "8675849037250"
        this.online = online
        this.status = status
        this.brightness = 90
        this.voltage = 234.54
        this.electric = 0.051
        this.activePower = 8.7
        this.powerFactor = 0.783
        this.workTime = 124.45
        this.hz = 49.92
    }
}

export default Product
