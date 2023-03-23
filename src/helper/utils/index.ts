export function generateRandomColor() {
    const colors = ['#FF6B6B', '#FEB144', '#48BB78', '#4299E1', '#9F7AEA', '#ED64A6', '#F56565', '#ECC94B', '#38B2AC'];
    return colors[Math.floor(Math.random() * colors.length)];
}