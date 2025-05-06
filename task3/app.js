const products = [
    { name: 'Smartphone', category: 'electronics', price: 599, rating: 4.5 },
    { name: 'T-Shirt', category: 'clothing', price: 20, rating: 4.2 },
    { name: 'Laptop', category: 'electronics', price: 1200, rating: 4.8 },
    { name: 'Jeans', category: 'clothing', price: 40, rating: 4.0 }
  ];
  
  const productList = document.getElementById('productList');
  const categoryFilter = document.getElementById('categoryFilter');
  const sortRating = document.getElementById('sortRating');
  
  function renderProducts(data) {
    productList.innerHTML = '';
    data.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `<h3>${p.name}</h3><p>Category: ${p.category}</p><p>Price: $${p.price}</p><p>Rating: ${p.rating}</p>`;
      productList.appendChild(div);
    });
  }
  
  function filterAndSort() {
    let filtered = [...products];
    const category = categoryFilter.value;
    const sort = sortRating.value;
  
    if (category !== 'all') {
      filtered = filtered.filter(p => p.category === category);
    }
  
    if (sort === 'high') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sort === 'low') {
      filtered.sort((a, b) => a.rating - b.rating);
    }
  
    renderProducts(filtered);
  }
  
  categoryFilter.addEventListener('change', filterAndSort);
  sortRating.addEventListener('change', filterAndSort);
  
  document.addEventListener('DOMContentLoaded', () => renderProducts(products));
  