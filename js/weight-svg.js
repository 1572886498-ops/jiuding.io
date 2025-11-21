// 砝码SVG图标绘制函数
document.addEventListener('DOMContentLoaded', function() {
    // 绘制logo砝码图标
    drawWeightLogo();
});

// 绘制logo砝码
function drawWeightLogo() {
    const logoSvg = document.getElementById('weight-logo');
    if (!logoSvg) return;
    
    const ctx = logoSvg.getContext('2d');
    
    // 设置画布大小
    logoSvg.setAttribute('width', '80');
    logoSvg.setAttribute('height', '80');
    
    // 清空画布
    ctx.clearRect(0, 0, 80, 80);
    
    // 绘制主体砝码
    drawLogoWeight(ctx, 40, 45, 30, 40);
    
    // 绘制精细装饰
    drawWeightDetails(ctx, 40, 45, 30, 40);
}

// 绘制logo砝码主体
function drawLogoWeight(ctx, x, y, width, height) {
    // 主体渐变
    const gradient = ctx.createLinearGradient(x - width/2, y - height/2, x + width/2, y + height/2);
    gradient.addColorStop(0, '#3498db');
    gradient.addColorStop(0.5, '#2980b9');
    gradient.addColorStop(1, '#2c3e50');
    
    // 绘制主体矩形
    ctx.fillStyle = gradient;
    ctx.fillRect(x - width/2, y - height/2, width, height);
    
    // 添加边框
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 2;
    ctx.strokeRect(x - width/2, y - height/2, width, height);
    
    // 顶部挂环
    drawTopRing(ctx, x, y - height/2, width * 0.6, 15);
    
    // 中心标记
    drawCenterMark(ctx, x, y, width * 0.4);
}

// 绘制顶部挂环
function drawTopRing(ctx, x, y, width, height) {
    // 绘制挂环背景（与主体连接的部分）
    ctx.fillStyle = '#2c3e50';
    ctx.fillRect(x - width/4, y - height/2, width/2, height/2);
    
    // 绘制挂环
    ctx.beginPath();
    ctx.arc(x, y - height/2, width/4, 0, Math.PI * 2);
    ctx.fillStyle = '#3498db';
    ctx.fill();
    
    // 挂环内部空心
    ctx.beginPath();
    ctx.arc(x, y - height/2, width/8, 0, Math.PI * 2);
    ctx.fillStyle = '#2c3e50';
    ctx.fill();
}

// 绘制中心标记
function drawCenterMark(ctx, x, y, size) {
    // 十字标记
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 2;
    
    // 横线
    ctx.beginPath();
    ctx.moveTo(x - size/2, y);
    ctx.lineTo(x + size/2, y);
    ctx.stroke();
    
    // 竖线
    ctx.beginPath();
    ctx.moveTo(x, y - size/2);
    ctx.lineTo(x, y + size/2);
    ctx.stroke();
}

// 绘制砝码细节
function drawWeightDetails(ctx, x, y, width, height) {
    // 添加刻度线
    drawScaleMarks(ctx, x, y, width, height);
    
    // 添加高光效果
    drawHighlight(ctx, x, y, width, height);
    
    // 添加阴影效果
    drawShadow(ctx, x, y, width, height);
}

// 绘制刻度线
function drawScaleMarks(ctx, x, y, width, height) {
    ctx.strokeStyle = '#ecf0f1';
    ctx.lineWidth = 1;
    
    // 左侧刻度
    for(let i = 0; i < 4; i++) {
        const markY = y - height/3 + i * height/6;
        ctx.beginPath();
        ctx.moveTo(x - width/2, markY);
        ctx.lineTo(x - width/2 + 5, markY);
        ctx.stroke();
    }
    
    // 右侧刻度
    for(let i = 0; i < 4; i++) {
        const markY = y - height/3 + i * height/6;
        ctx.beginPath();
        ctx.moveTo(x + width/2 - 5, markY);
        ctx.lineTo(x + width/2, markY);
        ctx.stroke();
    }
}

// 绘制高光效果
function drawHighlight(ctx, x, y, width, height) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 2;
    
    // 左上方到右下方的高光
    ctx.beginPath();
    ctx.moveTo(x - width/2 + 3, y - height/2 + 3);
    ctx.lineTo(x + width/3, y + height/3);
    ctx.stroke();
    
    // 顶部边缘高光
    ctx.beginPath();
    ctx.moveTo(x - width/2 + 2, y - height/2 + 2);
    ctx.lineTo(x + width/2 - 2, y - height/2 + 2);
    ctx.stroke();
    
    // 左侧边缘高光
    ctx.beginPath();
    ctx.moveTo(x - width/2 + 2, y - height/2 + 2);
    ctx.lineTo(x - width/2 + 2, y + height/2 - 2);
    ctx.stroke();
}

// 绘制阴影效果
function drawShadow(ctx, x, y, width, height) {
    // 使用半透明黑色作为阴影
    ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    
    // 右下角阴影
    ctx.fillRect(x + width/2 - 5, y + height/2 - 5, 5, 5);
    
    // 右侧边缘阴影
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(x + width/2 - 2, y - height/2, 2, height);
    
    // 底部边缘阴影
    ctx.fillRect(x - width/2, y + height/2 - 2, width, 2);
}

// 创建响应式砝码图标
function createResponsiveWeightIcon(container, size = 100, type = 'standard') {
    // 创建SVG元素
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('class', 'weight-icon');
    
    // 添加到容器
    container.appendChild(svg);
    
    const ctx = svg.getContext('2d');
    
    // 根据类型绘制不同的砝码图标
    switch(type) {
        case 'standard':
            drawStandardWeight(ctx, size/2, size/2, size*0.4, size*0.6);
            break;
        case 'precision':
            drawPrecisionWeight(ctx, size/2, size/2, size*0.35, size*0.55);
            break;
        case 'small':
            drawSmallWeight(ctx, size/2, size/2, size*0.3, size*0.5);
            break;
    }
    
    return svg;
}

// 绘制标准砝码
function drawStandardWeight(ctx, x, y, width, height) {
    // 标准砝码样式
    ctx.fillStyle = '#3498db';
    ctx.fillRect(x - width/2, y - height/2, width, height);
    ctx.strokeStyle = '#2980b9';
    ctx.lineWidth = 2;
    ctx.strokeRect(x - width/2, y - height/2, width, height);
    
    // 顶部挂孔
    ctx.beginPath();
    ctx.arc(x, y - height/2 - width/8, width/8, 0, Math.PI * 2);
    ctx.fillStyle = '#2980b9';
    ctx.fill();
    ctx.stroke();
}

// 绘制精密砝码
function drawPrecisionWeight(ctx, x, y, width, height) {
    // 精密砝码样式 - 六边形
    ctx.beginPath();
    const radius = width/2;
    for(let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const px = x + radius * Math.cos(angle);
        const py = y - height/4 + radius * Math.sin(angle);
        if(i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fillStyle = '#9b59b6';
    ctx.fill();
    ctx.strokeStyle = '#8e44ad';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 精密标记
    ctx.fillStyle = '#ecf0f1';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('E', x, y + 5);
}

// 绘制小型砝码
function drawSmallWeight(ctx, x, y, width, height) {
    // 小型砝码样式 - 圆形
    ctx.beginPath();
    ctx.arc(x, y, width/2, 0, Math.PI * 2);
    ctx.fillStyle = '#e74c3c';
    ctx.fill();
    ctx.strokeStyle = '#c0392b';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // 中心孔
    ctx.beginPath();
    ctx.arc(x, y, width/6, 0, Math.PI * 2);
    ctx.fillStyle = '#c0392b';
    ctx.fill();
}

// 导出绘制函数，以便其他脚本可以使用
window.drawWeightLogo = drawWeightLogo;
window.createResponsiveWeightIcon = createResponsiveWeightIcon;
window.drawStandardWeight = drawStandardWeight;
window.drawPrecisionWeight = drawPrecisionWeight;
window.drawSmallWeight = drawSmallWeight;