// 砝码产品数据
const weightProducts = [
    {
        name: 'M1级标准砝码',
        description: '适用于一般精度要求的工业测量场景，采用优质铸铁材料制造，表面经过特殊电泳处理，具有卓越的耐腐蚀性和稳定性。本系列砝码是工业生产中最常用的标准砝码之一。',
        range: '1mg - 20kg',
        accuracy: 'M1级',
        material: '高品质铸铁',
        features: [
            '完全符合OIML R111-1国际计量标准',
            '表面黑色电泳处理，抗腐蚀性能优异',
            '特别适合工业环境和一般实验室使用',
            '提供国家级校准证书，可溯源至国家标准',
            '采用一体成型工艺，结构牢固耐用',
            '提供标准砝码盒，便于存放和使用'
        ],
        applications: '工业生产、质量控制、一般实验室、天平校准、计量检验',
        technicalSpecs: {
            density: '7.70 g/cm³',
            magnetic: '≤5.0%',
            temperatureRange: '-20°C 至 +50°C',
            humidityRange: '20% 至 80%',
            annualStability: '≤0.1%'
        }
    },
    {
        name: 'F1级不锈钢砝码',
        description: '高精度测量专用砝码，采用316L优质不锈钢材质精密制造，具有出色的防腐蚀性能和长期稳定性。本系列砝码特别适合精密实验室环境和高级别校准工作。',
        range: '1mg - 10kg',
        accuracy: 'F1级',
        material: '316L食品级不锈钢',
        features: [
            '完全符合ISO 3560-1标准和JJG 99-2006计量检定规程',
            '超低磁性设计，≤0.5%',
            '密度均匀，温度膨胀系数小',
            '激光精密切割，表面镜面抛光',
            '高精度激光刻字，永久标识',
            '提供CNAS认可的国家级校准证书',
            '防氧化、抗腐蚀、耐酸碱',
            '配专业防潮砝码盒'
        ],
        applications: '精密实验室、计量检定机构、食品制药行业、航空航天、军工计量',
        technicalSpecs: {
            density: '7.80 g/cm³',
            magnetic: '≤0.5%',
            temperatureRange: '-10°C 至 +40°C',
            humidityRange: '30% 至 70%',
            annualStability: '≤0.02%'
        }
    },
    {
        name: 'E2级高精度砝码',
        description: '实验室级超高精度砝码，采用特殊无磁不锈钢合金材料精密锻造而成，具有极佳的长期稳定性和准确性。本系列砝码是国家计量标准和高精度校准工作的理想选择。',
        range: '1mg - 5kg',
        accuracy: 'E2级',
        material: '特种无磁不锈钢合金',
        features: [
            '完全符合JJG 99-2006计量检定规程和OIML R111-1标准',
            '超高性能磁性 ≤0.005%',
            '极低温度膨胀系数',
            '卓越的化学稳定性和耐腐蚀性',
            '提供CNAS认可的国家级校准证书',
            '采用超精密加工工艺，公差极小',
            '表面电解抛光处理，无划痕',
            '配高级防潮恒温砝码盒',
            '含专用镊子和手套'
        ],
        applications: '国家计量标准、高精密仪器校准、科研机构、航空航天、军工部门、核电站',
        technicalSpecs: {
            density: '7.85 g/cm³',
            magnetic: '≤0.005%',
            temperatureRange: '15°C 至 25°C',
            humidityRange: '40% 至 60%',
            annualStability: '≤0.005%'
        }
    },
    {
        name: '精密砝码套装',
        description: '精心设计的多种规格组合套装，满足不同测量场景的需求。每套砝码都经过严格的质量控制和校准，提供专业的砝码盒用于安全存放和便捷使用。',
        range: '1mg - 2kg 多种组合可选',
        accuracy: 'M1/F1/F2/E2级可选',
        material: '优质铸铁/304不锈钢/316L不锈钢/无磁不锈钢合金',
        features: [
            '多种精度等级和量程组合可供选择',
            '高档木质/金属砝码盒，防潮防震',
            '包含专用镊子、手套和使用说明书',
            '可根据客户需求定制特殊组合套装',
            '所有砝码均经过严格校准',
            '提供不同等级的校准证书',
            '砝码盒内部分层设计，便于分类存放'
        ],
        applications: '实验室、校准机构、质量检测部门、高校教学、科研院所',
        availableSets: [
            '标准实验室套装：1mg-1kg (F2级)',
            '精密测量套装：1mg-500g (F1级)',
            '工业计量套装：1g-5kg (M1级)',
            '微量分析套装：1mg-200g (E2级)',
            '定制组合套装：根据客户需求定制'
        ]
    },
    {
        name: '不锈钢增坨砝码',
        description: '专为大型电子秤和工业称重系统设计的增坨砝码，采用优质不锈钢材料制造，具有优异的耐腐蚀性和结构稳定性。本系列砝码适合各种大型称重设备的校准工作。',
        range: '1kg - 200kg',
        accuracy: 'F2/M1/M2级可选',
        material: '304/316L不锈钢',
        features: [
            '人性化提手设计，使用方便安全',
            '表面精抛光处理，美观耐用',
            '适用于大型电子秤和工业称重系统校准',
            '可提供CNAS认可的校准证书',
            '采用一体成型工艺，结构牢固',
            '多种尺寸和重量可供选择',
            '防滑底部设计，使用更安全',
            '激光刻字标识，清晰永久'
        ],
        applications: '大型电子秤校准、工业称重系统校准、物流仓储称重设备、地磅校准、钢铁冶金行业',
        technicalSpecs: {
            density: '7.75 g/cm³',
            magnetic: '≤2.0% (F2级)',
            temperatureRange: '-20°C 至 +60°C',
            humidityRange: '10% 至 90%',
            loadCapacity: '额定载荷的120%'
        }
    },
    {
        name: '铸铁标准砝码',
        description: '经济实用的工业级砝码，采用优质灰口铸铁材料制造，表面经过特殊防腐处理，具有良好的耐磨性和稳定性。',
        range: '1kg - 500kg',
        accuracy: 'M1/M2/M3级',
        material: '灰口铸铁',
        features: [
            '符合OIML R111标准',
            '表面黑色喷漆处理，防腐蚀',
            '经济实用，性价比高',
            '带提手设计，使用方便',
            '适合工业环境使用',
            '可提供校准证书'
        ],
        applications: '工业生产、仓库计量、一般检测、教学演示、大型设备校准',
        technicalSpecs: {
            density: '7.20 g/cm³',
            magnetic: '≤10.0%',
            temperatureRange: '-30°C 至 +70°C',
            humidityRange: '5% 至 95%',
            annualStability: '≤0.5%'
        }
    }
];

// 砝码规格数据
const weightSpecifications = [
    {
        grade: 'E1级',
        density: '7.90 g/cm³',
        magnetic: '≤0.005%',
        volume: '≤0.8 cm³/kg',
        temperature: '20°C ±0.5°C',
        humidity: '40-60%',
        stability: '年变化率≤0.001%',
        application: '国家基准、参考标准、最高级别校准'
    },
    {
        grade: 'E2级',
        density: '7.85 g/cm³',
        magnetic: '≤0.05%',
        volume: '≤1.0 cm³/kg',
        temperature: '20°C ±1°C',
        humidity: '30-70%',
        stability: '年变化率≤0.005%',
        application: '高精密校准、实验室标准、二级标准器'
    },
    {
        grade: 'F1级',
        density: '7.80 g/cm³',
        magnetic: '≤0.5%',
        volume: '≤1.2 cm³/kg',
        temperature: '20°C ±2°C',
        humidity: '30-70%',
        stability: '年变化率≤0.02%',
        application: '精密测量、校准工作、三级标准器'
    },
    {
        grade: 'F2级',
        density: '7.75 g/cm³',
        magnetic: '≤2.0%',
        volume: '≤1.5 cm³/kg',
        temperature: '20°C ±5°C',
        humidity: '20-80%',
        stability: '年变化率≤0.05%',
        application: '工业校准、质量检验、四级标准器'
    },
    {
        grade: 'M1级',
        density: '7.70 g/cm³',
        magnetic: '≤5.0%',
        volume: '≤2.0 cm³/kg',
        temperature: '20°C ±10°C',
        humidity: '20-80%',
        stability: '年变化率≤0.1%',
        application: '一般测量、日常使用、工业生产'
    },
    {
        grade: 'M1-2级',
        density: '7.68 g/cm³',
        magnetic: '≤8.0%',
        volume: '≤2.2 cm³/kg',
        temperature: '20°C ±15°C',
        humidity: '10-90%',
        stability: '年变化率≤0.2%',
        application: '检查用、普通工业测量'
    },
    {
        grade: 'M2级',
        density: '7.65 g/cm³',
        magnetic: '≤10.0%',
        volume: '≤2.5 cm³/kg',
        temperature: '20°C ±15°C',
        humidity: '10-90%',
        stability: '年变化率≤0.5%',
        application: '粗略测量、检查用、教学示范'
    },
    {
        grade: 'M3级',
        density: '7.60 g/cm³',
        magnetic: '≤15.0%',
        volume: '≤3.0 cm³/kg',
        temperature: '室温',
        humidity: '无特殊要求',
        stability: '年变化率≤1.0%',
        application: '教学用、粗略指示用'
    }
];

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 页面加载动画
    initPageLoader();
    
    // 初始化Logo和图标
    initLogosAndIcons();
    
    // 生成产品卡片
    renderProductCards();
    
    // 生成规格表格
    renderSpecificationsTable();
    
    // 平滑滚动效果
    setupSmoothScroll();
    
    // 动画效果
    setupAnimations();
    
    // 表单提交处理
    setupFormSubmission();
    
    // 初始化响应式菜单
    initResponsiveMenu();
    
    // 初始化产品筛选
    initProductFiltering();
    
    // 初始化导航栏滚动效果
    initNavbarScrollEffect();
    
    // 初始化回到顶部按钮
    initBackToTop();
});

// 初始化Logo和图标
function initLogosAndIcons() {
    // 延迟初始化，确保页面元素完全加载
    setTimeout(() => {
        // 初始化页面Logo
        const logoElement = document.getElementById('weight-logo');
        if (logoElement) {
            // 如果有SVG绘制函数，使用它绘制Logo
            if (window.drawWeightLogo) {
                try {
                    // 创建一个容器来替代SVG元素
                    const logoContainer = document.createElement('div');
                    logoContainer.id = 'weight-logo-container';
                    logoElement.parentNode.insertBefore(logoContainer, logoElement);
                    logoElement.parentNode.removeChild(logoElement);
                    
                    // 绘制Logo
                    window.drawWeightLogo('weight-logo-container', 80, 80);
                } catch (e) {
                    console.error('Logo绘制失败:', e);
                    // 回退到默认显示
                    logoElement.innerHTML = '<text x="50" y="60" font-family="Arial" font-size="16" text-anchor="middle" fill="#3498db">砝码</text>';
                }
            }
        }
        
        // 初始化首页英雄区域图标
        const heroIcon = document.getElementById('hero-weight-icon');
        if (heroIcon && window.drawWeightIcon) {
            try {
                window.drawWeightIcon('hero-weight-icon', 200, 200, 'chrome');
            } catch (e) {
                console.error('英雄区域图标绘制失败:', e);
            }
        }
    }, 100);
}

// 渲染产品卡片
function renderProductCards() {
    const productGrid = document.querySelector('.product-grid');
    
    weightProducts.forEach((product, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // 生成特点列表HTML
        let featuresHtml = '';
        if (product.features && product.features.length > 0) {
            featuresHtml = '            <ul class="product-features">';
            product.features.forEach(feature => {
                featuresHtml += `                <li>${feature}</li>`;
            });
            featuresHtml += '            </ul>';
        }
        
        // 生成技术规格HTML
        let techSpecsHtml = '';
        if (product.technicalSpecs) {
            techSpecsHtml = '            <div class="product-technical-specs">\n                <h4>技术规格:</h4>\n                <ul>';
            
            for (const [key, value] of Object.entries(product.technicalSpecs)) {
                // 将属性名转换为更友好的显示格式
                const displayName = key.split(/(?=[A-Z])/).map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                ).join(' ');
                
                techSpecsHtml += `                <li><strong>${displayName}:</strong> ${value}</li>`;
            }
            
            techSpecsHtml += '            </ul>\n            </div>';
        }
        
        // 生成可选套装HTML
        let availableSetsHtml = '';
        if (product.availableSets) {
            availableSetsHtml = '            <div class="product-available-sets">\n                <h4>可选套装:</h4>\n                <ul>';
            
            product.availableSets.forEach(set => {
                availableSetsHtml += `                <li>${set}</li>`;
            });
            
            availableSetsHtml += '            </ul>\n            </div>';
        }
        
        card.innerHTML = `
            <div class="product-image">
                <div id="product-icon-${index}" class="weight-icon-container"></div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                ${featuresHtml}
                <div class="product-specs">
                    <div class="spec-row">
                        <div class="spec-item">
                            <strong>量程:</strong>
                            <span>${product.range}</span>
                        </div>
                        <div class="spec-item">
                            <strong>精度等级:</strong>
                            <span>${product.accuracy}</span>
                        </div>
                    </div>
                    <div class="spec-row">
                        <div class="spec-item">
                            <strong>材质:</strong>
                            <span>${product.material}</span>
                        </div>
                        <div class="spec-item">
                            <strong>应用场景:</strong>
                            <span>${product.applications}</span>
                        </div>
                    </div>
                </div>
                ${techSpecsHtml}
                ${availableSetsHtml}
                <div class="product-cta">
                    <a href="#contact" class="btn-secondary">了解更多</a>
                    <a href="#specifications" class="btn-outline">查看详细规格</a>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
        
        // 绘制产品图标
        setTimeout(() => {
            const iconType = getIconTypeByIndex(index);
            if (window.drawResponsiveWeightIcon) {
                window.drawResponsiveWeightIcon(`product-icon-${index}`, iconType);
            }
        }, 100);
    });
    
    // 绘制产品图标（备用）
    drawProductIcons();
}

// 根据索引获取图标类型
function getIconTypeByIndex(index) {
    const types = ['standard', 'chrome', 'chrome', 'set', 'standard', 'cast'];
    return types[index % types.length];
}

// 渲染规格表格
function renderSpecificationsTable() {
    const specsTable = document.querySelector('.specs-table');
    
    let tableHTML = `
        <table>
            <thead>
                <tr>
                    <th>精度等级</th>
                    <th>密度</th>
                    <th>磁性</th>
                    <th>体积</th>
                    <th>温度要求</th>
                    <th>湿度要求</th>
                    <th>稳定性</th>
                    <th>应用场景</th>
                </tr>
            </thead>
            <tbody>
    `;
    
    weightSpecifications.forEach(spec => {
        tableHTML += `
            <tr>
                <td>${spec.grade}</td>
                <td>${spec.density}</td>
                <td>${spec.magnetic}</td>
                <td>${spec.volume}</td>
                <td>${spec.temperature}</td>
                <td>${spec.humidity}</td>
                <td>${spec.stability}</td>
                <td>${spec.application}</td>
            </tr>
        `;
    });
    
    tableHTML += `
            </tbody>
        </table>
    `;
    
    specsTable.innerHTML = tableHTML;
}

// 平滑滚动设置
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 页面加载动画
function initPageLoader() {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-spinner"></div>
        <div class="loader-text">加载中...</div>
    `;
    document.body.appendChild(loader);
    
    // 模拟加载完成
    setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
            document.body.removeChild(loader);
            document.body.classList.add('loaded');
            
            // 初始化图片懒加载
            initLazyLoading();
        }, 500);
    }, 1200);
}

// 图片懒加载功能
function initLazyLoading() {
    // 检测浏览器是否支持原生懒加载
    const supportsLazyLoading = 'loading' in HTMLImageElement.prototype;
    
    if (supportsLazyLoading) {
        // 现代浏览器使用原生懒加载
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.loading = 'lazy';
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });
    } else {
        // 为不支持原生懒加载的浏览器提供回退方案
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '0px 0px 200px 0px', // 提前200px开始加载
            threshold: 0.01
        });
        
        lazyImages.forEach(img => {
            lazyLoadObserver.observe(img);
        });
    }
}

// 动画效果设置
function setupAnimations() {
    // 性能优化：使用节流函数限制滚动事件触发频率
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    
    // 监听滚动，为元素添加动画
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 观察所有section
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
    
    // 观察产品卡片
    document.querySelectorAll('.product-card').forEach((card, index) => {
        card.classList.add('animate-on-scroll');
        setTimeout(() => {
            observer.observe(card);
        }, index * 100);
    });
    
    // 为表格行添加动画
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach((row, index) => {
        row.classList.add('animate-on-scroll');
        setTimeout(() => {
            observer.observe(row);
        }, index * 50);
    });

    // 优化滚动事件处理：使用节流函数
    const handleScroll = throttle(() => {
        // 滚动进度条效果
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) {
            progressBar.style.width = scrollPercent + '%';
        }
        
        // 响应式导航栏效果增强
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (scrollTop > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        }
    }, 16); // 约60fps

    window.addEventListener('scroll', handleScroll);
    
    // 优化触摸事件
    document.addEventListener('touchstart', (e) => {
        // 为触摸设备添加特殊样式类
        document.body.classList.add('touch-device');
    }, { once: true });
}

// 添加表单提交处理
function setupFormSubmission() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        // 添加实时表单验证
        const formInputs = contactForm.querySelectorAll('input, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateFormField(this);
            });
            
            input.addEventListener('input', function() {
                const errorElement = this.nextElementSibling;
                if (errorElement && errorElement.classList.contains('error-message')) {
                    errorElement.remove();
                }
                this.classList.remove('error');
            });
        });
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // 验证所有字段
            formInputs.forEach(input => {
                if (!validateFormField(input)) {
                    isValid = false;
                }
            });
            
            if (!isValid) {
                const errorSummary = document.createElement('div');
                errorSummary.className = 'error-summary';
                errorSummary.textContent = '请修正表单中的错误后重试';
                
                // 移除已存在的错误摘要
                const existingSummary = contactForm.querySelector('.error-summary');
                if (existingSummary) {
                    existingSummary.remove();
                }
                
                contactForm.insertBefore(errorSummary, contactForm.firstChild);
                
                // 添加动画效果
                errorSummary.classList.add('show');
                
                return;
            }
            
            // 模拟表单提交
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.innerHTML = '提交中...';
            
            setTimeout(() => {
                // 显示成功消息
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.innerHTML = `
                    <div class="success-icon">✓</div>
                    <div class="success-text">
                        <h3>提交成功！</h3>
                        <p>感谢您的留言！我们会尽快与您联系。</p>
                    </div>
                `;
                
                contactForm.innerHTML = '';
                contactForm.appendChild(successMessage);
                successMessage.classList.add('show');
            }, 1500);
        });
    }
}

// 表单字段验证
function validateFormField(input) {
    const value = input.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // 移除已存在的错误信息
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.classList.contains('error-message')) {
        errorElement.remove();
    }
    
    // 根据字段类型验证
    if (input.required && value === '') {
        isValid = false;
        errorMessage = '此字段为必填项';
    } else if (input.type === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = '请输入有效的邮箱地址';
        }
    } else if (input.name === 'message' && value.length < 10) {
        isValid = false;
        errorMessage = '消息内容至少需要10个字符';
    }
    
    // 显示错误信息
    if (!isValid) {
        const errorSpan = document.createElement('span');
        errorSpan.className = 'error-message';
        errorSpan.textContent = errorMessage;
        input.parentNode.insertBefore(errorSpan, input.nextSibling);
        input.classList.add('error');
    } else {
        input.classList.remove('error');
        input.classList.add('valid');
    }
    
    return isValid;
}

// 初始化响应式菜单
function initResponsiveMenu() {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '≡';
    menuToggle.setAttribute('aria-label', '打开菜单');
    
    const header = document.querySelector('header');
    if (header) {
        header.appendChild(menuToggle);
    }
    
    const nav = document.querySelector('nav');
    if (nav) {
        nav.classList.add('mobile-nav');
        nav.id = 'mobile-menu';
    }
    
    menuToggle.addEventListener('click', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.toggle('open');
            
            // 切换图标
            if (mobileMenu.classList.contains('open')) {
                menuToggle.innerHTML = '×';
                this.setAttribute('aria-label', '关闭菜单');
                document.body.classList.add('menu-open');
                document.body.style.overflow = 'hidden'; // 防止页面滚动
            } else {
                menuToggle.innerHTML = '≡';
                this.setAttribute('aria-label', '打开菜单');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = 'auto'; // 恢复页面滚动
            }
        }
    });
    
    // 点击导航链接后关闭菜单
    const links = document.querySelectorAll('#mobile-menu a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu && mobileMenu.classList.contains('open')) {
                mobileMenu.classList.remove('open');
                menuToggle.innerHTML = '≡';
                menuToggle.setAttribute('aria-label', '打开菜单');
                document.body.classList.remove('menu-open');
                document.body.style.overflow = 'auto';
            }
        });
    });
}

// 初始化产品筛选
function initProductFiltering() {
    const filterContainer = document.createElement('div');
    filterContainer.className = 'product-filters';
    filterContainer.innerHTML = `
        <div class="filter-controls">
            <button class="filter-btn active" data-filter="all">全部产品</button>
            <button class="filter-btn" data-filter="standard">标准砝码</button>
            <button class="filter-btn" data-filter="chrome">不锈钢砝码</button>
            <button class="filter-btn" data-filter="set">砝码套装</button>
            <button class="filter-btn" data-filter="large">大型砝码</button>
        </div>
    `;
    
    const productsSection = document.querySelector('section:nth-of-type(2)');
    const productGrid = document.querySelector('.product-grid');
    
    if (productsSection && productGrid) {
        productsSection.insertBefore(filterContainer, productGrid);
    }
    
    // 添加筛选功能
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有活跃状态
            filterBtns.forEach(b => b.classList.remove('active'));
            // 添加当前按钮活跃状态
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // 筛选产品
            productCards.forEach((card, index) => {
                const iconType = getIconTypeByIndex(index);
                if (filterValue === 'all' || iconType === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// 初始化导航栏滚动效果
function initNavbarScrollEffect() {
    const header = document.querySelector('header');
    if (!header) return;
    
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // 控制导航栏显示/隐藏（滚动时）
        if (scrollTop > lastScrollTop && scrollTop > 300) {
            // 向下滚动
            header.style.transform = 'translateY(-100%)';
        } else {
            // 向上滚动
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// 初始化回到顶部按钮
function initBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.setAttribute('aria-label', '回到顶部');
    
    document.body.appendChild(backToTopBtn);
    
    // 显示/隐藏按钮
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // 点击回到顶部
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// 绘制产品图标
function drawProductIcons() {
    const weightIcons = document.querySelectorAll('.weight-icon');
    
    weightIcons.forEach(icon => {
        const type = icon.getAttribute('data-type');
        const ctx = icon.getContext('2d');
        
        // 设置基础样式
        ctx.strokeStyle = '#3498db';
        ctx.lineWidth = 2;
        
        // 根据类型绘制不同的砝码图标
        switch(type) {
            case '0': // M1级
                drawCastIronWeight(ctx, 50, 50, 40, 60);
                break;
            case '1': // F1级不锈钢
                drawStainlessWeight(ctx, 50, 50, 35, 50);
                break;
            case '2': // E2级高精度
                drawHighPrecisionWeight(ctx, 50, 50, 30, 45);
                break;
            case '3': // 套装砝码
                drawWeightSet(ctx, 50, 50, 45);
                break;
            case '4': // 增坨砝码
                drawLargeWeight(ctx, 50, 50, 40, 40);
                break;
        }
    });
}

// 绘制铸铁砝码
function drawCastIronWeight(ctx, x, y, width, height) {
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(x - width/2, y - height/2, width, height);
    ctx.strokeRect(x - width/2, y - height/2, width, height);
    
    // 顶部挂孔
    ctx.beginPath();
    ctx.arc(x, y - height/2 - 10, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#A0522D';
    ctx.fill();
    ctx.stroke();
}

// 绘制不锈钢砝码
function drawStainlessWeight(ctx, x, y, width, height) {
    ctx.fillStyle = '#B0C4DE';
    ctx.fillRect(x - width/2, y - height/2, width, height);
    ctx.strokeRect(x - width/2, y - height/2, width, height);
    
    // 顶部挂孔
    ctx.beginPath();
    ctx.arc(x, y - height/2 - 8, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#778899';
    ctx.fill();
    ctx.stroke();
    
    // 不锈钢特有反光
    ctx.beginPath();
    ctx.moveTo(x - width/3, y - height/2);
    ctx.lineTo(x + width/3, y - height/3);
    ctx.strokeStyle = '#F5F5F5';
    ctx.lineWidth = 1;
    ctx.stroke();
}

// 绘制高精度砝码
function drawHighPrecisionWeight(ctx, x, y, width, height) {
    ctx.fillStyle = '#F0F8FF';
    ctx.fillRect(x - width/2, y - height/2, width, height);
    ctx.strokeRect(x - width/2, y - height/2, width, height);
    
    // 精密砝码特点 - 圆形顶部
    ctx.beginPath();
    ctx.arc(x, y - height/2 - 5, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#E6E6FA';
    ctx.fill();
    ctx.stroke();
    
    // 刻度线
    for(let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(x - width/2 - 5, y - height/3 + i * height/6);
        ctx.lineTo(x - width/2, y - height/3 + i * height/6);
        ctx.stroke();
    }
}

// 绘制砝码套装
function drawWeightSet(ctx, x, y, size) {
    // 多个不同大小的砝码叠放
    for(let i = 0; i < 3; i++) {
        const w = size * (0.8 - i * 0.15);
        const h = size * (0.3 - i * 0.05);
        const offset = i * 10;
        
        ctx.fillStyle = i === 0 ? '#8B4513' : i === 1 ? '#B0C4DE' : '#F0F8FF';
        ctx.fillRect(x - w/2, y - h/2 + offset, w, h);
        ctx.strokeRect(x - w/2, y - h/2 + offset, w, h);
    }
}

// 绘制大型增坨砝码
function drawLargeWeight(ctx, x, y, width, height) {
    ctx.fillStyle = '#D3D3D3';
    ctx.fillRect(x - width/2, y - height/4, width, height/2);
    ctx.strokeRect(x - width/2, y - height/4, width, height/2);
    
    // 顶部提手
    ctx.beginPath();
    ctx.moveTo(x - width/4, y - height/4);
    ctx.lineTo(x - width/4, y - height/2);
    ctx.lineTo(x + width/4, y - height/2);
    ctx.lineTo(x + width/4, y - height/4);
    ctx.fillStyle = '#A9A9A9';
    ctx.fill();
    ctx.stroke();
    
    // 中间圆孔
    ctx.beginPath();
    ctx.arc(x, y, width/6, 0, Math.PI * 2);
    ctx.fillStyle = '#696969';
    ctx.fill();
}