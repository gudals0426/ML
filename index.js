<!DOCTYPE>
<html>
<charset UTF-8>
<head>
<title>모션그래픽</title>
</head>
<body>
<script src="https://cdn.jsdelivr.net/npm/@mojs/core"></script>
<script src="index.js"></script>
<script>
const bouncyCircle = new mojs.Shape({
  parent:       '#bouncyCircle',
  shape:        'circle',
  fill:         {'#F64040': '#FC46AD'},
  radius:       {20: 80},
  duration:     2000,
  isYoyo:       true,
  isShowStart:  true,
  easing:       'elastic.inout',
  repeat:       1,
});
bouncyCircle.play()
console.log(const);
</script>
</body>
</html>
