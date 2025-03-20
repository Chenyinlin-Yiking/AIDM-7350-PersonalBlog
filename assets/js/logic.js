// 为所有按钮添加切换功能
document.querySelectorAll('.toggle-more').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.closest('section');
      const allItems = section.querySelectorAll('.work-item');
      const isCollapsed = this.getAttribute('data-state') === 'collapsed';
  
      // 切换隐藏状态（从第三项开始）
      allItems.forEach((item, index) => {
        if (index >= 2) {
          item.classList.toggle('hidden', !isCollapsed);
        }
      });
  
      // 更新按钮状态和文字
      this.setAttribute('data-state', isCollapsed ? 'expanded' : 'collapsed');
      this.textContent = isCollapsed ? 'Show Less' : 'Full Works';
    });
  });