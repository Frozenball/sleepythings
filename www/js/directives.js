angular.module('app.directives', [])

.directive('alarmclock', function($interval) {
  return {
    restrict: 'E',
    template: "<canvas id='pgcanvas' width='800' height='800' style='background-color: white; width:100%;'/>",
    link: link
  };

  function link(scope, element, attrs) {
    console.log(element);
    scope.canvas = element.find('canvas')[0];
    scope.wake = 7 * 3600;
    scope.night = 11 * 3600;
    var ctx = scope.canvas.getContext('2d');
    var centerX = 400;
    var centerY = 400;
    var fix = Math.PI;

    function alarm2circle(clock) {
      return 360 - ((clock) / (12 * 3600)) * 360;
    }

    function leftpad(x) {
      if ((''+x).length == 1) return '0' + x;
      else return x;
    }

    function drawSegment(o, n, width, color, fromStart) {
      ctx.lineWidth = 4;
if (fromStart) ctx.lineWidth = 8;
      for (var i = o-n; i <= o+n; i += 0.5) {
        if (fromStart) {
          var x = centerX;
          var y = centerY;
        } else {
          var x = centerX + Math.sin(fix + i * (Math.PI / 180)) * (350 - width / 2);
          var y = centerY + Math.cos(fix + i * (Math.PI / 180)) * (350 - width / 2);
        }
        var x2 = centerX + Math.sin(fix + i * (Math.PI / 180)) * (350 + width / 2);
        var y2 = centerY + Math.cos(fix + i * (Math.PI / 180)) * (350 + width / 2);

        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }

    function draw() {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, 800, 800);
      var a1 = alarm2circle(scope.night);
      var a2 = alarm2circle(scope.wake);
      for (var i = 0; i <= 360; i += (360 / 60)) {
        ctx.beginPath();
        ctx.lineWidth = 10;


        var diff1 = Math.abs(a1 - a2);
        var diff2 = Math.abs(360 + a1 - a2);

        // Scenario One:
        // NIGHT: 9, WAKE 8
        // NIGHT: 1, WAKE 8
        //
        //  i > a1 || i < a2
        //
        if (
           i < Math.min(a1, a2) || i > Math.max(a1, a2)
         ) {
          ctx.strokeStyle = '#27ae60';
          ctx.lineWidth = 6;
        } else {
          ctx.strokeStyle = 'lightgray';
          ctx.lineWidth = 2;
        }

        var width = 50;
        if ((i % (360 / 24)) == 0) {
          ctx.lineWidth *= 2;
          width = 50;
          // ctx.strokeStyle = 'gray';
        }

        // if (Math.abs(i - a1) <= 5) {
        //   ctx.strokeStyle = 'orange';
        //   ctx.lineWidth = 40;
        // }
        // if (Math.abs(i - a2) <= 5) {
        //   ctx.strokeStyle = 'red';
        //   ctx.lineWidth = 40;
        // }

        var x = centerX + Math.sin(fix + i * (Math.PI / 180)) * (350 - width / 2);
        var y = centerY + Math.cos(fix + i * (Math.PI / 180)) * (350 - width / 2);
        var x2 = centerX + Math.sin(fix + i * (Math.PI / 180)) * (350 + width / 2);
        var y2 = centerY + Math.cos(fix + i * (Math.PI / 180)) * (350 + width / 2);

        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();

      }

      var currentdate = new Date();
      var pos = (currentdate.getHours()%12)*3600 + currentdate.getMinutes()*60;
      drawSegment(alarm2circle(pos), 0, -200, '#bdc3c7', true);
      var pos = (currentdate.getMinutes()/(60/12))*3600 + currentdate.getSeconds()*60;
      drawSegment(alarm2circle(pos), 0, 50, '#bdc3c7', true);


      var width = 50;
      ctx.lineWidth = 5;
      for (var i = a1-6; i <= a1+6; i += 0.5) {
        var x = centerX + Math.sin(fix + i * (Math.PI / 180)) * (350 - width / 2);
        var y = centerY + Math.cos(fix + i * (Math.PI / 180)) * (350 - width / 2);
        var x2 = centerX + Math.sin(fix + i * (Math.PI / 180)) * (350 + width / 2);
        var y2 = centerY + Math.cos(fix + i * (Math.PI / 180)) * (350 + width / 2);

        ctx.strokeStyle = '#27ae60';
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      var width = 50;
      ctx.lineWidth = 5;
      for (var i = a2-6; i <= a2+6; i += 0.5) {
        var x = centerX + Math.sin(fix + i * (Math.PI / 180)) * (350 - width / 2);
        var y = centerY + Math.cos(fix + i * (Math.PI / 180)) * (350 - width / 2);
        var x2 = centerX + Math.sin(fix + i * (Math.PI / 180)) * (350 + width / 2);
        var y2 = centerY + Math.cos(fix + i * (Math.PI / 180)) * (350 + width / 2);

        ctx.strokeStyle = '#27ae60';
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }

      var x = centerX + Math.sin(fix + a1 * (Math.PI / 180)) * (260);
      var y = centerY + Math.cos(fix + a1 * (Math.PI / 180)) * (260);

      ctx.font = "40px Arial";
      ctx.fillStyle = 'black';
      ctx.textAlign = "center";
      ctx.textBaseline = 'middle';

      var hours = 12 + Math.floor(scope.night / 3600);
      var minutes = Math.floor(scope.night / 60) % 60;

      ctx.fillText(hours + ':' + leftpad(minutes), x, y);

      var x = centerX + Math.sin(fix + a2 * (Math.PI / 180)) * (260);
      var y = centerY + Math.cos(fix + a2 * (Math.PI / 180)) * (260);

      ctx.font = "40px Arial";
      ctx.fillStyle = 'black';
      ctx.textAlign = "center";
      ctx.textBaseline = 'middle';

      var hours = Math.floor(scope.wake / 3600);
      var minutes = Math.floor(scope.wake / 60) % 60;

      ctx.fillText(hours + ':' + leftpad(minutes), x, y);


      ctx.font = "100px Arial";
      ctx.fillStyle = 'black';
      ctx.textAlign = "center";
      ctx.textBaseline = 'middle';

      var hours = Math.floor(scope.wake / 3600);
      var minutes = Math.floor(scope.wake / 60) % 60;

      ctx.fillText(currentdate.getHours()+':'+leftpad(currentdate.getMinutes()), 400, 400);

    }

    draw();
    $interval(function() {
      //scope.night = (scope.night + 1) % (12 * 3600);
      draw();
    }, 10);
    //  ctx.lineTo(300,150);
    //  ctx.stroke();
  }
});
