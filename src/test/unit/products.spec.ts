import { ProductController } from "../../controller/ProductController"

describe("Product Controller Create", () => {
    it('should have a create product function', async () => {
        const productController = new ProductController();
        expect(typeof productController.createProduct).toBe("function")
        
    })
})

test('did not rain', () => {

})