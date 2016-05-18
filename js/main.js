var app = angular.module('menuApp',[]);

app.controller('setMenu', function($scope,$http){
   $scope.menus=gp.menu;
   $scope.setSubMenu = function(menu,$event){
      //-메뉴 색상 초기화
      $(".menu_icon").css("color",gp.color.menu.init);
      //-선택한 메뉴의 서브 메뉴 세팅.
      $scope.subMenus = gp.subMenu[menu];
      //-선택한 메뉴 색상 세팅.
      $(event.currentTarget).css("color",gp.color.menu.choosed);
   }

   //SUB메뉴 선택 시, 메인 화면 HTML 호출.
   $scope.getMain = function(sub,$event){
         $scope.mainHtml = gp.callHtml[sub];
   }
});
