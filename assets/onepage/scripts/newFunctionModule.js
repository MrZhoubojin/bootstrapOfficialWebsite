
$('.color-panel').click(function() {
	$('.messageBoard').toggle()
	return false
})
// $('body').click(function (e) {
// 	$('.messageBoard').hide()
// 	if ( e && e.stopPropagation ) {
// 		//因此它支持W3C的stopPropagation方法 
// 		e.stopPropagation() 
// 	} else {
// 		//否则，我们需要使用IE的方式来取消事件冒泡 
// 		window.event.cancelBubble = true
// 	}
// 	return false
// })
$('.formBtn').click(function () {
	$('.messageBoard').hide()
	return false
})