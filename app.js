/* ==================== VOGUE STUDIO APPLICATION LOGIC ==================== */

class ClothingBrandApp {
  constructor() {
    this.storageKey = 'vogue_studio_data_v1';
    this.posCart = [];
    this.initData();
    this.initEvents();
    this.renderAll();
  }

  /* Initial Mock Data Generator for Clothing Brand */
  initData() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.data = JSON.parse(saved);
    } else {
      this.data = {
        products: [
          {
            id: 'PROD-101',
            name: 'Royal Velvet 3-Pc Embroidered Suit',
            sku: 'VOG-26-VLV01',
            category: 'Pret 3-Piece',
            fabric: 'Micro Velvet 9000',
            collection: 'Festive Luxury',
            price: 14500,
            cost: 6200,
            sizes: { S: 4, M: 2, L: 8, XL: 3 },
            image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&auto=format&fit=crop'
          },
          {
            id: 'PROD-102',
            name: 'Summer Breeze Digital Print Lawn',
            sku: 'VOG-26-LWN04',
            category: 'Unstitched Lawn',
            fabric: 'Swiss Lawn',
            collection: 'Summer Edition',
            price: 5800,
            cost: 2600,
            sizes: { S: 15, M: 20, L: 18, XL: 10 },
            image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=300&auto=format&fit=crop'
          },
          {
            id: 'PROD-103',
            name: 'Mirror Work Organza Dupatta Kurti',
            sku: 'VOG-26-KRT09',
            category: 'Embroidered Kurti',
            fabric: 'Organza / Raw Silk',
            collection: 'Casual Glam',
            price: 7200,
            cost: 3100,
            sizes: { S: 1, M: 3, L: 5, XL: 2 },
            image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=300&auto=format&fit=crop'
          },
          {
            id: 'PROD-104',
            name: 'Classic White Raw Silk Mens Kurta Set',
            sku: 'VOG-26-MN02',
            category: 'Mens Wear',
            fabric: 'Raw Silk',
            collection: 'Groom & Formal',
            price: 8900,
            cost: 3900,
            sizes: { S: 8, M: 12, L: 14, XL: 6 },
            image: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=300&auto=format&fit=crop'
          },
          {
            id: 'PROD-105',
            name: 'Chiffon Zari Work Wedding Wear',
            sku: 'VOG-26-CHF08',
            category: 'Pret 3-Piece',
            fabric: 'Pure Bambool Chiffon',
            collection: 'Bridal Couture',
            price: 22500,
            cost: 9500,
            sizes: { S: 3, M: 5, L: 4, XL: 1 },
            image: 'https://images.unsplash.com/photo-1583391733975-d28f898398e0?w=300&auto=format&fit=crop'
          }
        ],
        orders: [
          {
            id: 'ORD-9021',
            customerName: 'Ayesha Khan',
            phone: '0300-4567890',
            city: 'Lahore',
            channel: 'Instagram DM',
            items: 'Royal Velvet Suit (M)',
            totalAmount: 14500,
            paymentStatus: 'Paid (Bank)',
            orderStatus: 'Shipped',
            date: '2026-08-27'
          },
          {
            id: 'ORD-9022',
            customerName: 'Sana Tariq',
            phone: '0321-8901234',
            city: 'Islamabad',
            channel: 'WhatsApp',
            items: 'Digital Print Lawn (L)',
            totalAmount: 5800,
            paymentStatus: 'COD (Pending)',
            orderStatus: 'Pending',
            date: '2026-08-28'
          },
          {
            id: 'ORD-9023',
            customerName: 'Zainab Fatima',
            phone: '0312-5554321',
            city: 'Karachi',
            channel: 'Website',
            items: 'Mirror Work Kurti (S)',
            totalAmount: 7200,
            paymentStatus: 'COD (Pending)',
            orderStatus: 'Delivered',
            date: '2026-08-25'
          }
        ],
        stitchingBatches: [
          {
            id: 'BATCH-104',
            tailor: 'Master Aslam (Unit 1)',
            article: 'Summer Breeze Lawn 3-Pc',
            qty: 50,
            costPerPiece: 650,
            stage: 'Stitching'
          },
          {
            id: 'BATCH-105',
            tailor: 'Master Rashid (Embroidery Specialist)',
            article: 'Chiffon Zari Dupattas',
            qty: 30,
            costPerPiece: 1200,
            stage: 'Embroidery'
          }
        ],
        fabrics: [
          { name: 'Egyptian Cotton Lawn', color: 'Pastel Mint', meters: 450, cost: 240, supplier: 'Kohinoor Textile Mills' },
          { name: 'Micro Velvet 9000', color: 'Deep Plum', meters: 210, cost: 680, supplier: 'Barki Fabrics' },
          { name: 'Pure Raw Silk', color: 'Off-White', meters: 180, cost: 850, supplier: 'Multan Silk Weavers' }
        ],
        customers: [
          { id: 'CUST-01', name: 'Al-Madina Garments (Faisalabad)', type: 'Wholesale Buyer', phone: '0312-9876543', city: 'Faisalabad', orders: 14, credit: 125000 },
          { id: 'CUST-02', name: 'Mrs. Hina Salman', type: 'Retail VIP', phone: '0300-1122334', city: 'Lahore', orders: 8, credit: 0 },
          { id: 'CUST-03', name: 'Al-Karam Boutique Outlet', type: 'Wholesale Buyer', phone: '0333-7788990', city: 'Peshawar', orders: 9, credit: 85000 }
        ],
        expenses: [
          { id: 'EXP-501', date: '2026-08-20', category: 'Fabric Purchase', description: 'Bought 450M Egyptian Cotton Lawn Roll', amount: 108000, paidVia: 'Bank Transfer' },
          { id: 'EXP-502', date: '2026-08-24', category: 'Tailor Wages', description: 'Master Aslam Batch #103 Stitching Payout', amount: 32500, paidVia: 'Cash' },
          { id: 'EXP-503', date: '2026-08-26', category: 'Marketing / Ads', description: 'Instagram Reels Ad Campaign Summer Collection', amount: 45000, paidVia: 'Credit Card' }
        ]
      };
      this.saveData();
    }
  }

  saveData() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.data));
  }

  /* Initialize Nav & UI Event Listeners */
  initEvents() {
    // Sidebar Tabs Navigation
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Mobile Sidebar Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    if (menuToggle && sidebar) {
      menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('show');
      });
    }

    // Notification Dropdown Toggle
    const notifBtn = document.getElementById('notif-btn');
    const notifDropdown = document.getElementById('notif-dropdown');
    if (notifBtn && notifDropdown) {
      notifBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        notifDropdown.classList.toggle('show');
      });
      document.addEventListener('click', () => notifDropdown.classList.remove('show'));
    }

    // Global Search Bar Listener
    const globalSearch = document.getElementById('global-search');
    if (globalSearch) {
      globalSearch.addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        if (val.length > 1) {
          this.switchTab('inventory');
          const searchInput = document.getElementById('inv-search');
          if (searchInput) {
            searchInput.value = val;
            this.filterInventory();
          }
        }
      });
    }
  }

  /* Switch View Tab */
  switchTab(tabId) {
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-view').forEach(el => el.classList.remove('active'));

    const targetNav = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
    const targetView = document.getElementById(`view-${tabId}`);

    if (targetNav) targetNav.classList.add('active');
    if (targetView) targetView.classList.add('active');

    // Close mobile sidebar if open
    document.getElementById('sidebar')?.classList.remove('show');

    // Tab specific renders
    if (tabId === 'dashboard') {
      this.renderCharts();
    } else if (tabId === 'pos') {
      this.renderPosCatalog();
    }
  }

  /* Render Everything */
  renderAll() {
    this.renderDashboard();
    this.renderInventory();
    this.renderOrders();
    this.renderStitching();
    this.renderCustomers();
    this.renderExpenses();
    this.populateOrderProductOptions();
    this.updateBadges();
  }

  /* Update Badges Count */
  updateBadges() {
    const lowStockCount = this.data.products.filter(p => this.getTotalStock(p.sizes) < 5).length;
    const pendingOrdersCount = this.data.orders.filter(o => o.orderStatus === 'Pending').length;

    const lowBadge = document.getElementById('low-stock-badge');
    const pendBadge = document.getElementById('pending-orders-badge');

    if (lowBadge) lowBadge.textContent = `${lowStockCount} Low`;
    if (pendBadge) pendBadge.textContent = `${pendingOrdersCount}`;
  }

  getTotalStock(sizesObj) {
    return (sizesObj.S || 0) + (sizesObj.M || 0) + (sizesObj.L || 0) + (sizesObj.XL || 0);
  }

  /* ==================== 1. DASHBOARD ==================== */
  renderDashboard() {
    const totalRev = this.data.orders.reduce((acc, o) => acc + Number(o.totalAmount), 0) + 1450000;
    const totalStockVal = this.data.products.reduce((acc, p) => acc + (p.price * this.getTotalStock(p.sizes)), 0);
    const inStitchingQty = this.data.stitchingBatches.reduce((acc, b) => acc + Number(b.qty), 0);

    document.getElementById('kpi-revenue').textContent = `PKR ${totalRev.toLocaleString()}`;
    document.getElementById('kpi-orders').textContent = `${this.data.orders.length + 320} Orders`;
    document.getElementById('kpi-stitching').textContent = `${inStitchingQty} Pieces`;
    document.getElementById('kpi-stock-val').textContent = `PKR ${totalStockVal.toLocaleString()}`;

    // Top Articles List
    const topList = document.getElementById('top-articles-list');
    if (topList) {
      topList.innerHTML = this.data.products.slice(0, 4).map(p => `
        <tr>
          <td>
            <div class="flex-align gap-sm">
              <img src="${p.image}" class="article-thumb" alt="${p.name}">
              <div>
                <strong>${p.name}</strong><br>
                <small class="text-muted">${p.sku}</small>
              </div>
            </div>
          </td>
          <td><span class="badge badge-purple">${p.category}</span></td>
          <td class="text-gold font-bold">PKR ${p.price.toLocaleString()}</td>
          <td><strong>${Math.floor(Math.random() * 40) + 20} Pcs</strong></td>
          <td>${this.getTotalStock(p.sizes) < 5 ? `<span class="badge badge-rose">Low (${this.getTotalStock(p.sizes)})</span>` : `<span class="badge badge-success">${this.getTotalStock(p.sizes)} in stock</span>`}</td>
        </tr>
      `).join('');
    }

    setTimeout(() => this.renderCharts(), 100);
  }

  /* Custom HTML Canvas Charts Drawing */
  renderCharts() {
    // 1. Sales Canvas Bar Chart
    const salesCanvas = document.getElementById('salesChart');
    if (salesCanvas && salesCanvas.getContext) {
      const ctx = salesCanvas.getContext('2d');
      const w = (salesCanvas.width = salesCanvas.parentElement.clientWidth || 400);
      const h = (salesCanvas.height = 200);

      ctx.clearRect(0, 0, w, h);
      const months = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
      const values = [1200, 1450, 1900, 2100, 1650, 1845]; // in Thousands PKR
      const maxVal = 2500;

      const barWidth = 36;
      const spacing = (w - 60) / months.length;

      months.forEach((m, idx) => {
        const x = 40 + idx * spacing;
        const barH = (values[idx] / maxVal) * (h - 50);
        const y = h - 30 - barH;

        // Draw Bar
        const grad = ctx.createLinearGradient(0, y, 0, h - 30);
        grad.addColorStop(0, '#F59E0B');
        grad.addColorStop(1, '#D97706');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barH, [6, 6, 0, 0]);
        ctx.fill();

        // Label
        ctx.fillStyle = '#94A3B8';
        ctx.font = '12px Plus Jakarta Sans';
        ctx.fillText(m, x + 6, h - 10);

        // Value text
        ctx.fillStyle = '#F8FAFC';
        ctx.font = '10px Plus Jakarta Sans';
        ctx.fillText(`${(values[idx]/1000).toFixed(1)}M`, x, y - 6);
      });
    }

    // 2. Category Pie / Donut Chart
    const catCanvas = document.getElementById('categoryChart');
    if (catCanvas && catCanvas.getContext) {
      const ctx = catCanvas.getContext('2d');
      const w = (catCanvas.width = 220);
      const h = (catCanvas.height = 220);
      ctx.clearRect(0, 0, w, h);

      const slices = [
        { label: 'Pret 3-Pc', val: 40, color: '#F59E0B' },
        { label: 'Unstitched', val: 30, color: '#E11D48' },
        { label: 'Kurtis', val: 18, color: '#A855F7' },
        { label: 'Menswear', val: 12, color: '#06B6D4' }
      ];

      let total = slices.reduce((a, b) => a + b.val, 0);
      let startAngle = 0;

      slices.forEach(slice => {
        let sliceAngle = (slice.val / total) * 2 * Math.PI;
        ctx.fillStyle = slice.color;
        ctx.beginPath();
        ctx.moveTo(w / 2, h / 2);
        ctx.arc(w / 2, h / 2, 85, startAngle, startAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();
        startAngle += sliceAngle;
      });

      // Donut Inner Hole
      ctx.fillStyle = '#141E33';
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, 50, 0, 2 * Math.PI);
      ctx.fill();

      // Donut Center Text
      ctx.fillStyle = '#F8FAFC';
      ctx.font = 'bold 13px Outfit';
      ctx.textAlign = 'center';
      ctx.fillText('100% Sales', w / 2, h / 2 + 4);
    }
  }

  /* ==================== 2. INVENTORY ==================== */
  renderInventory(items = this.data.products) {
    const tbody = document.getElementById('inventory-table-body');
    if (!tbody) return;

    if (items.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" class="text-center py-lg text-muted">No clothing articles found.</td></tr>`;
      return;
    }

    tbody.innerHTML = items.map(p => {
      const totStock = this.getTotalStock(p.sizes);
      const isLow = totStock < 5;
      return `
        <tr>
          <td><img src="${p.image}" class="article-thumb" alt="${p.name}"></td>
          <td>
            <strong>${p.name}</strong><br>
            <span class="small text-gold">${p.sku}</span> | <span class="small text-muted">${p.collection || 'Standard'}</span>
          </td>
          <td>
            <span class="badge badge-purple">${p.category}</span><br>
            <small class="text-muted">Fabric: ${p.fabric}</small>
          </td>
          <td>
            <span class="size-pill">S: ${p.sizes.S || 0}</span>
            <span class="size-pill">M: ${p.sizes.M || 0}</span>
            <span class="size-pill">L: ${p.sizes.L || 0}</span>
            <span class="size-pill">XL: ${p.sizes.XL || 0}</span>
          </td>
          <td>
            <strong class="text-gold">PKR ${p.price.toLocaleString()}</strong><br>
            <small class="text-muted">Cost: PKR ${p.cost.toLocaleString()}</small>
          </td>
          <td><strong>${totStock} Pcs</strong></td>
          <td>
            ${isLow ? `<span class="badge badge-rose"><i class="fa-solid fa-triangle-exclamation"></i> Low Stock</span>` : `<span class="badge badge-success">In Stock</span>`}
          </td>
          <td class="text-right">
            <button class="btn btn-xs btn-secondary" onclick="app.editStock('${p.id}')"><i class="fa-solid fa-pen"></i></button>
            <button class="btn btn-xs btn-danger" onclick="app.deleteProduct('${p.id}')"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      `;
    }).join('');
  }

  filterInventory() {
    const q = document.getElementById('inv-search')?.value.toLowerCase() || '';
    const cat = document.getElementById('inv-category-filter')?.value || 'ALL';
    const status = document.getElementById('inv-stock-status')?.value || 'ALL';

    const filtered = this.data.products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
      const matchCat = cat === 'ALL' || p.category === cat;
      const tot = this.getTotalStock(p.sizes);
      const matchStatus = status === 'ALL' || (status === 'LOW' ? tot < 5 : tot >= 5);
      return matchSearch && matchCat && matchStatus;
    });

    this.renderInventory(filtered);
  }

  saveProduct(e) {
    e.preventDefault();
    const newProd = {
      id: 'PROD-' + Date.now().toString().slice(-4),
      name: document.getElementById('prod-name').value,
      sku: document.getElementById('prod-sku').value,
      category: document.getElementById('prod-category').value,
      fabric: document.getElementById('prod-fabric').value,
      collection: document.getElementById('prod-collection').value || 'Collection 2026',
      price: Number(document.getElementById('prod-price').value),
      cost: Number(document.getElementById('prod-cost').value),
      sizes: {
        S: Number(document.getElementById('prod-size-s').value || 0),
        M: Number(document.getElementById('prod-size-m').value || 0),
        L: Number(document.getElementById('prod-size-l').value || 0),
        XL: Number(document.getElementById('prod-size-xl').value || 0)
      },
      image: document.getElementById('prod-image').value || 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=300&auto=format&fit=crop'
    };

    this.data.products.unshift(newProd);
    this.saveData();
    this.renderAll();
    this.closeModal('add-product-modal');
    document.getElementById('product-form').reset();
  }

  deleteProduct(id) {
    if (confirm('Are you sure you want to delete this article?')) {
      this.data.products = this.data.products.filter(p => p.id !== id);
      this.saveData();
      this.renderAll();
    }
  }

  /* ==================== 3. ORDERS ==================== */
  renderOrders(statusFilter = 'ALL') {
    const tbody = document.getElementById('orders-table-body');
    if (!tbody) return;

    const list = statusFilter === 'ALL' ? this.data.orders : this.data.orders.filter(o => o.orderStatus === statusFilter);

    if (list.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" class="text-center py-lg text-muted">No orders found for status filter: ${statusFilter}</td></tr>`;
      return;
    }

    tbody.innerHTML = list.map(o => `
      <tr>
        <td><strong class="text-gold">${o.id}</strong><br><small class="text-muted">${o.date}</small></td>
        <td>
          <strong>${o.customerName}</strong><br>
          <small class="text-muted"><i class="fa-solid fa-location-dot"></i> ${o.city} (${o.phone})</small>
        </td>
        <td><span class="badge badge-info">${o.channel}</span></td>
        <td>${o.items}</td>
        <td><strong class="text-gold">PKR ${Number(o.totalAmount).toLocaleString()}</strong></td>
        <td><span class="badge ${o.paymentStatus.includes('Paid') ? 'badge-success' : 'badge-warning'}">${o.paymentStatus}</span></td>
        <td>
          <select class="form-select-sm" onchange="app.changeOrderStatus('${o.id}', this.value)">
            <option value="Pending" ${o.orderStatus === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="In-Stitching" ${o.orderStatus === 'In-Stitching' ? 'selected' : ''}>In-Stitching</option>
            <option value="Shipped" ${o.orderStatus === 'Shipped' ? 'selected' : ''}>Shipped (Courier)</option>
            <option value="Delivered" ${o.orderStatus === 'Delivered' ? 'selected' : ''}>Delivered</option>
            <option value="Cancelled" ${o.orderStatus === 'Cancelled' ? 'selected' : ''}>Cancelled/Returned</option>
          </select>
        </td>
        <td class="text-right">
          <button class="btn btn-xs btn-secondary" onclick="app.printOrderReceipt('${o.id}')"><i class="fa-solid fa-print"></i></button>
        </td>
      </tr>
    `).join('');
  }

  filterOrders(status, btnEl) {
    document.querySelectorAll('.tab-pill').forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
    this.renderOrders(status);
  }

  changeOrderStatus(orderId, newStatus) {
    const order = this.data.orders.find(o => o.id === orderId);
    if (order) {
      order.orderStatus = newStatus;
      this.saveData();
      this.updateBadges();
    }
  }

  populateOrderProductOptions() {
    const select = document.getElementById('ord-product-select');
    if (select) {
      select.innerHTML = this.data.products.map(p => `
        <option value="${p.id}">${p.name} (${p.sku}) - PKR ${p.price}</option>
      `).join('');
    }
  }

  updateOrderPricePreview() {
    const pId = document.getElementById('ord-product-select')?.value;
    const prod = this.data.products.find(p => p.id === pId);
    if (prod) {
      document.getElementById('ord-price').value = prod.price;
    }
  }

  saveOrder(e) {
    e.preventDefault();
    const prodId = document.getElementById('ord-product-select').value;
    const prod = this.data.products.find(p => p.id === prodId);
    const size = document.getElementById('ord-size-select').value;

    const newOrder = {
      id: 'ORD-' + Math.floor(1000 + Math.random() * 9000),
      customerName: document.getElementById('ord-cust-name').value,
      phone: document.getElementById('ord-cust-phone').value,
      city: document.getElementById('ord-city').value,
      channel: document.getElementById('ord-channel').value,
      items: `${prod ? prod.name : 'Article'} (${size})`,
      totalAmount: Number(document.getElementById('ord-price').value),
      paymentStatus: document.getElementById('ord-payment').value,
      orderStatus: 'Shipped',
      date: new Date().toISOString().split('T')[0]
    };

    // Deduct size stock
    if (prod && prod.sizes[size] > 0) {
      prod.sizes[size] -= 1;
    }

    this.data.orders.unshift(newOrder);
    this.saveData();
    this.renderAll();
    this.closeModal('add-order-modal');
    document.getElementById('order-form').reset();
  }

  /* ==================== 4. STITCHING & FABRIC ==================== */
  renderStitching() {
    const batchBody = document.getElementById('stitching-batches-body');
    const fabricBody = document.getElementById('fabric-stock-body');

    if (batchBody) {
      batchBody.innerHTML = this.data.stitchingBatches.map(b => `
        <tr>
          <td><strong class="text-gold">${b.id}</strong></td>
          <td><strong>${b.tailor}</strong></td>
          <td>${b.article}</td>
          <td><strong>${b.qty} Pcs</strong></td>
          <td>PKR ${b.costPerPiece}</td>
          <td><span class="badge badge-warning">${b.stage}</span></td>
          <td>
            <button class="btn btn-xs btn-success" onclick="app.completeStitchingBatch('${b.id}')">Ready & Stock In</button>
          </td>
        </tr>
      `).join('');
    }

    if (fabricBody) {
      fabricBody.innerHTML = this.data.fabrics.map(f => `
        <tr>
          <td><strong>${f.name}</strong></td>
          <td><span class="badge badge-purple">${f.color}</span></td>
          <td><strong>${f.meters} Meters</strong></td>
          <td>PKR ${f.cost}/M</td>
          <td class="small text-muted">${f.supplier}</td>
        </tr>
      `).join('');
    }
  }

  saveStitchingBatch(e) {
    e.preventDefault();
    const newBatch = {
      id: 'BATCH-' + Math.floor(100 + Math.random() * 900),
      tailor: document.getElementById('stitch-tailor').value,
      article: document.getElementById('stitch-article').value,
      qty: Number(document.getElementById('stitch-qty').value),
      costPerPiece: Number(document.getElementById('stitch-cost').value),
      stage: document.getElementById('stitch-stage').value
    };

    this.data.stitchingBatches.unshift(newBatch);
    this.saveData();
    this.renderStitching();
    this.closeModal('add-stitching-modal');
    document.getElementById('stitching-form').reset();
  }

  completeStitchingBatch(id) {
    this.data.stitchingBatches = this.data.stitchingBatches.filter(b => b.id !== id);
    this.saveData();
    this.renderStitching();
    alert('Batch marked complete! Apparel stock updated.');
  }

  /* ==================== 5. POS BILLING & CART ==================== */
  renderPosCatalog() {
    const container = document.getElementById('pos-items-container');
    if (!container) return;

    const q = document.getElementById('pos-search')?.value.toLowerCase() || '';
    const cat = document.getElementById('pos-category-filter')?.value || 'ALL';

    const filtered = this.data.products.filter(p => {
      const matchSearch = p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q);
      const matchCat = cat === 'ALL' || p.category === cat;
      return matchSearch && matchCat;
    });

    container.innerHTML = filtered.map(p => `
      <div class="pos-item-card" onclick="app.addToPosCart('${p.id}')">
        <img src="${p.image}" class="pos-item-img" alt="${p.name}">
        <div class="pos-item-title">${p.name}</div>
        <div class="pos-item-price">PKR ${p.price.toLocaleString()}</div>
        <div class="small text-muted">${this.getTotalStock(p.sizes)} in stock</div>
      </div>
    `).join('');
  }

  addToPosCart(prodId) {
    const prod = this.data.products.find(p => p.id === prodId);
    if (!prod) return;

    const existing = this.posCart.find(item => item.id === prodId);
    if (existing) {
      existing.qty += 1;
    } else {
      this.posCart.push({
        id: prod.id,
        name: prod.name,
        price: prod.price,
        size: 'M',
        qty: 1
      });
    }

    this.renderPosCart();
  }

  removeFromPosCart(idx) {
    this.posCart.splice(idx, 1);
    this.renderPosCart();
  }

  updateCartQty(idx, delta) {
    this.posCart[idx].qty += delta;
    if (this.posCart[idx].qty <= 0) {
      this.removeFromPosCart(idx);
    } else {
      this.renderPosCart();
    }
  }

  clearPosCart() {
    this.posCart = [];
    this.renderPosCart();
  }

  renderPosCart() {
    const container = document.getElementById('pos-cart-items');
    if (!container) return;

    if (this.posCart.length === 0) {
      container.innerHTML = `<p class="text-muted text-center py-lg">Cart is empty. Click apparel items to add.</p>`;
      this.calcPosTotal();
      return;
    }

    container.innerHTML = this.posCart.map((item, idx) => `
      <div class="pos-cart-item">
        <div>
          <div class="cart-item-title">${item.name}</div>
          <div class="cart-item-size">Size: ${item.size} | PKR ${item.price.toLocaleString()}</div>
        </div>
        <div class="cart-qty-ctrl">
          <button class="cart-qty-btn" onclick="app.updateCartQty(${idx}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="cart-qty-btn" onclick="app.updateCartQty(${idx}, 1)">+</button>
        </div>
      </div>
    `).join('');

    this.calcPosTotal();
  }

  calcPosTotal() {
    const subtotal = this.posCart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const discount = Number(document.getElementById('pos-discount')?.value || 0);
    const grandTotal = Math.max(0, subtotal - discount);

    document.getElementById('pos-subtotal').textContent = `PKR ${subtotal.toLocaleString()}`;
    document.getElementById('pos-grand-total').textContent = `PKR ${grandTotal.toLocaleString()}`;
  }

  checkoutPos() {
    if (this.posCart.length === 0) {
      alert('Please add items to cart first!');
      return;
    }

    const customerName = document.getElementById('pos-customer-name')?.value || 'Walk-in Customer';
    const subtotal = this.posCart.reduce((acc, item) => acc + (item.price * item.qty), 0);
    const discount = Number(document.getElementById('pos-discount')?.value || 0);
    const grandTotal = subtotal - discount;

    // Populated Printable Receipt Modal
    document.getElementById('rec-id').textContent = `Inv #VS-${Math.floor(1000 + Math.random() * 9000)}`;
    document.getElementById('rec-date').textContent = new Date().toLocaleDateString('en-GB');
    document.getElementById('rec-cust').textContent = customerName;
    document.getElementById('rec-subtotal').textContent = `PKR ${subtotal.toLocaleString()}`;
    document.getElementById('rec-discount').textContent = `PKR ${discount.toLocaleString()}`;
    document.getElementById('rec-total').textContent = `PKR ${grandTotal.toLocaleString()}`;

    const recBody = document.getElementById('rec-items-body');
    recBody.innerHTML = this.posCart.map(item => `
      <tr>
        <td>${item.name} (${item.size})</td>
        <td>${item.qty}</td>
        <td class="text-right">PKR ${(item.price * item.qty).toLocaleString()}</td>
      </tr>
    `).join('');

    // Save as completed store sale order
    this.data.orders.unshift({
      id: 'POS-' + Math.floor(1000 + Math.random() * 9000),
      customerName: customerName,
      phone: 'In-Store POS',
      city: 'Lahore (Store)',
      channel: 'Retail POS',
      items: this.posCart.map(i => `${i.name} x${i.qty}`).join(', '),
      totalAmount: grandTotal,
      paymentStatus: 'Paid (Cash/POS)',
      orderStatus: 'Delivered',
      date: new Date().toISOString().split('T')[0]
    });

    this.saveData();
    this.renderDashboard();
    this.renderOrders();
    this.clearPosCart();

    this.openModal('receipt-modal');
  }

  printOrderReceipt(orderId) {
    const o = this.data.orders.find(ord => ord.id === orderId);
    if (!o) return;

    document.getElementById('rec-id').textContent = o.id;
    document.getElementById('rec-date').textContent = o.date;
    document.getElementById('rec-cust').textContent = `${o.customerName} (${o.city})`;
    document.getElementById('rec-subtotal').textContent = `PKR ${o.totalAmount.toLocaleString()}`;
    document.getElementById('rec-discount').textContent = `PKR 0`;
    document.getElementById('rec-total').textContent = `PKR ${o.totalAmount.toLocaleString()}`;

    const recBody = document.getElementById('rec-items-body');
    recBody.innerHTML = `
      <tr>
        <td>${o.items}</td>
        <td>1</td>
        <td class="text-right">PKR ${o.totalAmount.toLocaleString()}</td>
      </tr>
    `;

    this.openModal('receipt-modal');
  }

  /* ==================== 6. CUSTOMER & WHOLESALE CRM ==================== */
  renderCustomers() {
    const tbody = document.getElementById('customer-table-body');
    if (!tbody) return;

    tbody.innerHTML = this.data.customers.map(c => `
      <tr>
        <td><strong>${c.name}</strong></td>
        <td><span class="badge ${c.type === 'Wholesale Buyer' ? 'badge-warning' : 'badge-purple'}">${c.type}</span></td>
        <td>${c.phone} (${c.city})</td>
        <td><strong>${c.orders} Orders</strong></td>
        <td>
          <strong class="${c.credit > 0 ? 'text-rose' : 'text-success'}">PKR ${c.credit.toLocaleString()}</strong>
        </td>
        <td>${c.credit > 0 ? `<span class="badge badge-rose">Pending Udhaar</span>` : `<span class="badge badge-success">Clear</span>`}</td>
        <td class="text-right">
          <button class="btn btn-xs btn-secondary" onclick="app.clearUdhaar('${c.id}')">Receive Payment</button>
        </td>
      </tr>
    `).join('');
  }

  saveCustomer(e) {
    e.preventDefault();
    const newCust = {
      id: 'CUST-' + Math.floor(10 + Math.random() * 90),
      name: document.getElementById('cust-name').value,
      type: document.getElementById('cust-type').value,
      phone: document.getElementById('cust-phone').value,
      city: document.getElementById('cust-city').value || 'Lahore',
      orders: 0,
      credit: Number(document.getElementById('cust-credit').value || 0)
    };

    this.data.customers.unshift(newCust);
    this.saveData();
    this.renderCustomers();
    this.closeModal('add-customer-modal');
    document.getElementById('customer-form').reset();
  }

  clearUdhaar(id) {
    const cust = this.data.customers.find(c => c.id === id);
    if (cust && cust.credit > 0) {
      const pay = prompt(`Enter payment amount received from ${cust.name}:`, cust.credit);
      if (pay) {
        cust.credit = Math.max(0, cust.credit - Number(pay));
        this.saveData();
        this.renderCustomers();
      }
    }
  }

  /* ==================== 7. EXPENSES & PROFIT ==================== */
  renderExpenses() {
    const tbody = document.getElementById('expense-table-body');
    if (!tbody) return;

    tbody.innerHTML = this.data.expenses.map(e => `
      <tr>
        <td><small class="text-muted">${e.date}</small></td>
        <td><span class="badge badge-warning">${e.category}</span></td>
        <td>${e.description}</td>
        <td><strong class="text-rose">PKR ${Number(e.amount).toLocaleString()}</strong></td>
        <td><span class="badge badge-info">${e.paidVia}</span></td>
      </tr>
    `).join('');

    // Recalculate Profit Breakdown
    const totalRev = this.data.orders.reduce((acc, o) => acc + Number(o.totalAmount), 0) + 1450000;
    const cogs = 850000;
    const opex = this.data.expenses.reduce((acc, e) => acc + Number(e.amount), 0) + 120000;
    const netProfit = totalRev - cogs - opex;

    document.getElementById('fin-total-revenue').textContent = `PKR ${totalRev.toLocaleString()}`;
    document.getElementById('fin-cogs').textContent = `PKR ${cogs.toLocaleString()}`;
    document.getElementById('fin-opex').textContent = `PKR ${opex.toLocaleString()}`;
    document.getElementById('fin-net-profit').textContent = `PKR ${netProfit.toLocaleString()}`;
  }

  saveExpense(e) {
    e.preventDefault();
    const newExp = {
      id: 'EXP-' + Math.floor(100 + Math.random() * 900),
      date: new Date().toISOString().split('T')[0],
      category: document.getElementById('exp-category').value,
      description: document.getElementById('exp-desc').value,
      amount: Number(document.getElementById('exp-amount').value),
      paidVia: 'Cash / Bank'
    };

    this.data.expenses.unshift(newExp);
    this.saveData();
    this.renderExpenses();
    this.closeModal('add-expense-modal');
    document.getElementById('expense-form').reset();
  }

  /* ==================== MODAL UTILITIES ==================== */
  openModal(modalId) {
    document.getElementById(modalId)?.classList.add('show');
  }

  closeModal(modalId) {
    document.getElementById(modalId)?.classList.remove('show');
  }
}

// Initialize Application Globals
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new ClothingBrandApp();
});
