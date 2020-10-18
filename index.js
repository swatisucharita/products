const style = `
<style>
    #products {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    #products .product {
        padding: 20px;
        border: 1px solid #ccc;
    }
</style>
`;

class Products extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.products = [
            { 
                category: 'Clothing',
                description: 'Fashion for every occasion',
                image: 'https://firebasestorage.googleapis.com/v0/b/products-catalog-657ee.appspot.com/o/clothing.jpg?alt=media&token=d2d2ca9c-a1d7-4c0d-9850-6ae85c10c297'
            },
            { 
                category: 'Footware',
                description: 'Step Out in Style',
                image: 'https://firebasestorage.googleapis.com/v0/b/products-catalog-657ee.appspot.com/o/footware.jpeg?alt=media&token=7cf60918-371f-4dca-ba7d-1d3365d550a6'
            },
            { 
                category: 'Accessories',
                description: 'Jazz up your look',
                image: 'https://firebasestorage.googleapis.com/v0/b/products-catalog-657ee.appspot.com/o/accessories.jpg?alt=media&token=489f7351-86e2-471d-bce2-76cc3d24eb14'
             },
            { 
                category: 'Toys & Books',
                description: 'Friend in need',
                image: 'https://firebasestorage.googleapis.com/v0/b/products-catalog-657ee.appspot.com/o/toys.jpeg?alt=media&token=be69bdc3-c1ab-4508-adc4-80d5c7ee37ec'
            },
            { 
                category: 'Bath & Playtime',
                description: 'Turn On The Fun',
                image: 'https://firebasestorage.googleapis.com/v0/b/products-catalog-657ee.appspot.com/o/bath.jpeg?alt=media&token=e97c58b5-fa88-49f6-b463-c262e5a522f8'
            }
        ];
    }

    connectedCallback(){
        this.render();
    }

    disconnectedCallback() {

    }

    render(){
        const { shadowRoot } = this;
        const container = document.createElement('div');
        let productsListContainer = '<div id="products">';
        productsListContainer = productsListContainer + style;
        this.products.forEach(product => {
            productsListContainer = productsListContainer + (`<div class="product">
                <h4>${product.category}</h4>
                <p>${product.description}</p>
                <div class="image">
                    <img height=200 src=${product.image || ''} />
                </div>
            </div>`);
        });
        productsListContainer = productsListContainer + '</div>'
        container.innerHTML = productsListContainer;
        shadowRoot.appendChild(container);
    }
}

customElements.define('products-list', Products);
