const detailContainer = document.getElementById('attraction-detail');

// 解析URL参数（优化为URLSearchParams）
function getUrlParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || '';
}

// 显示景点详情
function displayAttractionDetail(attraction) {
    detailContainer.innerHTML = ''; // 清空之前的内容

    // 支持多种图片格式，优雅降级
    const imageFormats = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'bmp'];
    const imageHTML = imageFormats.map((ext, idx) => `
        <img 
            src="images/${attraction.name}.${ext}" 
            alt="${attraction.name}" 
            style="display:${idx === 0 ? 'block' : 'none'};max-width:400px;width:100%;height:auto;margin:16px auto;border-radius:8px;box-shadow:0 2px 8px rgba(0,0,0,0.1);" 
            onerror="this.style.display='none';if(this.nextElementSibling){this.nextElementSibling.style.display='block';}"
        />
    `).join('');

    const detailHTML = `
        <h2>${attraction.name}</h2>
        ${imageHTML}
        <p><strong>位置：</strong>${attraction.location}</p>
        <p><strong>预算：</strong>约 ${attraction.budget.min}-${attraction.budget.max} 元</p>
        <p><strong>最佳季节：</strong>${attraction.bestSeason.join('、')}</p>
        <p><strong>亮点：</strong>${attraction.highlights.join('、')}</p>
        <p>${attraction.description}</p>
    `;
    detailContainer.innerHTML = detailHTML;
}

// 获取URL中的景点信息，增加异常处理
let attraction = null;
try {
    const attractionStr = getUrlParameter('attraction');
    attraction = attractionStr ? JSON.parse(attractionStr) : null;
} catch (e) {
    attraction = null;
}

if (attraction) {
    displayAttractionDetail(attraction);
} else {
    detailContainer.innerHTML = '<p>未找到景点详情，请返回重新选择。</p>';
}