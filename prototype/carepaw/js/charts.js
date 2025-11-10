// CarePaw Charts JavaScript using Chart.js

// Chart configuration and data
const chartConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                padding: 20,
                usePointStyle: true,
                font: {
                    family: 'Inter',
                    size: 12
                }
            }
        },
        tooltip: {
            backgroundColor: 'rgba(42, 157, 143, 0.9)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: '#2a9d8f',
            borderWidth: 1,
            cornerRadius: 8,
            displayColors: false
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
                font: {
                    family: 'Inter',
                    size: 11
                }
            }
        },
        x: {
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            ticks: {
                font: {
                    family: 'Inter',
                    size: 11
                }
            }
        }
    }
};

// Color palette
const colors = {
    primary: '#2a9d8f',
    secondary: '#264653',
    accent: '#e76f51',
    warning: '#e9c46a',
    light: '#e0f2f1',
    gradients: {
        primary: 'linear-gradient(135deg, #2a9d8f 0%, #1f7a73 100%)',
        secondary: 'linear-gradient(135deg, #264653 0%, #1b3b47 100%)',
        accent: 'linear-gradient(135deg, #e76f51 0%, #d65a3a 100%)'
    }
};

// Mock data for charts
const chartData = {
    regions: {
        labels: ['Sudeste', 'Nordeste', 'Sul', 'Norte', 'Centro-Oeste'],
        data: [45, 25, 15, 8, 7],
        colors: ['#2a9d8f', '#264653', '#e76f51', '#e9c46a', '#81c784']
    },
    maltreatment: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        data: [120, 135, 110, 95, 88, 92, 105, 118, 125, 140, 155, 148],
        colors: '#e76f51'
    },
    adoption: {
        labels: ['2019', '2020', '2021', '2022', '2023', '2024'],
        data: [15000, 18000, 22000, 28000, 35000, 42000],
        colors: '#2a9d8f'
    },
    ongs: {
        labels: ['SP', 'RJ', 'MG', 'RS', 'PR', 'SC', 'BA', 'GO', 'DF', 'ES'],
        data: [450, 320, 280, 220, 180, 150, 140, 120, 95, 85],
        colors: ['#2a9d8f', '#264653', '#e76f51', '#e9c46a', '#81c784', '#64b5f6', '#ba68c8', '#ff8a65', '#a5d6a7', '#ffb74d']
    }
};

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for Chart.js to load
    if (typeof Chart !== 'undefined') {
        initializeCharts();
    } else {
        // Retry after a short delay if Chart.js isn't loaded yet
        setTimeout(() => {
            if (typeof Chart !== 'undefined') {
                initializeCharts();
            } else {
                console.warn('Chart.js not loaded. Charts will not be displayed.');
                showChartError();
            }
        }, 1000);
    }
});

function initializeCharts() {
    // Remove loading indicators
    document.querySelectorAll('.chart-loading').forEach(loading => {
        loading.remove();
    });

    // Initialize each chart
    createRegionChart();
    createMaltreatmentChart();
    createAdoptionChart();
    createOngsChart();
    
    console.log('Charts initialized successfully! 📊');
}

// Region Chart (Doughnut)
function createRegionChart() {
    const ctx = document.getElementById('regionChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: chartData.regions.labels,
            datasets: [{
                data: chartData.regions.data,
                backgroundColor: chartData.regions.colors,
                borderWidth: 2,
                borderColor: '#ffffff',
                hoverBorderWidth: 3,
                hoverBorderColor: '#ffffff'
            }]
        },
        options: {
            ...chartConfig,
            cutout: '60%',
            plugins: {
                ...chartConfig.plugins,
                legend: {
                    ...chartConfig.plugins.legend,
                    position: 'right'
                },
                tooltip: {
                    ...chartConfig.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = ((value / total) * 100).toFixed(1);
                            return `${label}: ${percentage}%`;
                        }
                    }
                }
            },
            scales: {} // Remove scales for doughnut chart
        }
    });
}

// Maltreatment Chart (Line)
function createMaltreatmentChart() {
    const ctx = document.getElementById('maltreatmentChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: chartData.maltreatment.labels,
            datasets: [{
                label: 'Casos Reportados',
                data: chartData.maltreatment.data,
                borderColor: chartData.maltreatment.colors,
                backgroundColor: chartData.maltreatment.colors + '20',
                borderWidth: 3,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: chartData.maltreatment.colors,
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                tooltip: {
                    ...chartConfig.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `Casos: ${context.parsed.y}`;
                        }
                    }
                }
            }
        }
    });
}

// Adoption Chart (Bar)
function createAdoptionChart() {
    const ctx = document.getElementById('adoptionChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartData.adoption.labels,
            datasets: [{
                label: 'Adoções Realizadas',
                data: chartData.adoption.data,
                backgroundColor: chartData.adoption.colors,
                borderColor: chartData.adoption.colors,
                borderWidth: 2,
                borderRadius: 8,
                borderSkipped: false,
                hoverBackgroundColor: '#238a7a',
                hoverBorderColor: '#238a7a'
            }]
        },
        options: {
            ...chartConfig,
            plugins: {
                ...chartConfig.plugins,
                tooltip: {
                    ...chartConfig.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `Adoções: ${context.parsed.y.toLocaleString('pt-BR')}`;
                        }
                    }
                }
            },
            scales: {
                ...chartConfig.scales,
                y: {
                    ...chartConfig.scales.y,
                    ticks: {
                        ...chartConfig.scales.y.ticks,
                        callback: function(value) {
                            return value.toLocaleString('pt-BR');
                        }
                    }
                }
            }
        }
    });
}

// ONGs Chart (Horizontal Bar)
function createOngsChart() {
    const ctx = document.getElementById('ongsChart');
    if (!ctx) return;

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: chartData.ongs.labels,
            datasets: [{
                label: 'Número de ONGs',
                data: chartData.ongs.data,
                backgroundColor: chartData.ongs.colors,
                borderColor: chartData.ongs.colors,
                borderWidth: 2,
                borderRadius: 6,
                borderSkipped: false
            }]
        },
        options: {
            ...chartConfig,
            indexAxis: 'y',
            plugins: {
                ...chartConfig.plugins,
                tooltip: {
                    ...chartConfig.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `ONGs: ${context.parsed.x}`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 11
                        }
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    },
                    ticks: {
                        font: {
                            family: 'Inter',
                            size: 11
                        }
                    }
                }
            }
        }
    });
}

// Error handling for charts
function showChartError() {
    document.querySelectorAll('.chart-container canvas').forEach(canvas => {
        const container = canvas.parentElement;
        const error = document.createElement('div');
        error.className = 'chart-error';
        error.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <p>Erro ao carregar gráfico</p>
            <small>Verifique sua conexão com a internet</small>
        `;
        error.style.cssText = `
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 300px;
            color: #6c757d;
            text-align: center;
        `;
        error.querySelector('i').style.cssText = `
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #e76f51;
        `;
        error.querySelector('p').style.cssText = `
            margin: 0 0 0.5rem 0;
            font-weight: 500;
        `;
        error.querySelector('small').style.cssText = `
            margin: 0;
            font-size: 0.8rem;
        `;
        
        canvas.style.display = 'none';
        container.appendChild(error);
    });
}

// Chart animation on scroll
function animateChartsOnScroll() {
    const chartsSection = document.querySelector('.charts-section');
    if (!chartsSection) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.chart-container').forEach(container => {
        container.style.opacity = '0';
        container.style.transform = 'translateY(30px)';
        container.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(container);
    });
}

// Initialize chart animations
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(animateChartsOnScroll, 500);
});

// Responsive chart handling
function handleChartResize() {
    Chart.helpers.each(Chart.instances, function(instance) {
        instance.resize();
    });
}

window.addEventListener('resize', debounce(handleChartResize, 300));

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export chart data for potential API integration
window.CarePawCharts = {
    data: chartData,
    config: chartConfig,
    colors: colors,
    updateChart: function(chartId, newData) {
        const chart = Chart.getChart(chartId);
        if (chart) {
            chart.data = newData;
            chart.update();
        }
    }
};

console.log('Charts module loaded successfully! 📈');

