function getBkgColor(selector){
    const ele=document.querySelector(selector)
    return ele.style.backgroundColor
}

alert(getBkgColor('#el-1'))

