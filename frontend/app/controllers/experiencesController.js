(function() {

  /**
   * The experiences controller function
   */
  var ExperiencesController = function($scope, experiencesFactory) {
    // experiencesFactory.query(storeExperiences);
    experiencesFactory.query()
                      .$promise
                      .then(function(experiences) {
                        storeExperiences(experiences);
                        $scope.afterExperiencesStored = true;
                      });
    
    /**
     * Function to get all experiences from backend and store in
     * $scope
     */
    function storeExperiences(experiences) {
      // Define all type arrays
      $scope.commercials  = [];
      $scope.courses      = [];
      $scope.projects     = [];
      $scope.awards       = [];
      $scope.educations   = [];

      $scope.haveCommercials  = false;
      $scope.haveCourses      = false;
      $scope.haveProjects     = false;
      $scope.haveAwards       = false;
      $scope.haveEducations   = false;

      // Loop all experiences and place in correct type array
      angular.forEach(experiences, function(value, key) {
        for (var type in value.types) {
          switch(value.types[type]) {
            case "Award":
              $scope.awards.push(value);
              $scope.haveAwards = true;
              break;
            case "Commercial":
              $scope.commercials.push(value);
              $scope.haveCommercials = true;
              break;
            case "Course":
              $scope.courses.push(value);
              $scope.haveCourses = true;
              break;
            case "Education":
              $scope.educations.push(value);
              $scope.haveEducations = true;
              break;
            case "Project":
              $scope.projects.push(value);
              $scope.haveProjects = true;
              break;
          } 
        }
      });
    }
  }

  ExperiencesController.$inject = ['$scope', 'experiencesFactory'];

  angular.module('mattiashaApp')
    .controller('ExperiencesController', ExperiencesController);
}());