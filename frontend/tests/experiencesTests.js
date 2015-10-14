describe('Test for ExperiencesController', function() {
  // Basic variables
  var $q,
      $rootScope,
      $scope,
      mockExperiencesResponse = window.mockExperiencesResponse,
      mockExperiencesResultCommercial = window.mockExperiencesResultCommercial,
      mockExperiencesResultAward = window.mockExperiencesResultAward;

  // Include our main app
  beforeEach(module('mattiashaApp'));
  
  // Inject $q and $rootscope
  beforeEach(inject(function(_$q_, _$rootScope_) {
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));
  
  // Incject ExperiencesController with a mock experiencesFactory
  beforeEach(inject(function($controller) {
    $scope = $rootScope.$new();
    
    mockExperiencesFactory = {
  		query: function() {
        queryDeferred = $q.defer();
        return {$promise: queryDeferred.promise};
    	}
    }
    
    spyOn(mockExperiencesFactory, 'query').and.callThrough();
    
    $controller('ExperiencesController', {
      '$scope': $scope,
      'experiencesFactory': mockExperiencesFactory
    });
  }));
  
  // ExperienceController test cases
  describe('ExperiencesController $scope', function() {
    beforeEach(function() {
      queryDeferred.resolve(mockExperiencesResponse);
      $rootScope.$apply();
    });
    
    it('should query the ExperiencesFactory query function', function() {
      expect(mockExperiencesFactory.query).toHaveBeenCalled();
    });

    it('should set correct commercial objects in $scope', function() {
      expect($scope.commercials).toEqual(mockExperiencesResultCommercial);
    });

    it('should set correct award objects in $scope', function() {
      expect($scope.awards).toEqual(mockExperiencesResultAward);
    });
    
    it('should set $scope.afterExperiencesStored to true', function() {
      expect($scope.afterExperiencesStored).toBe(true);
    });
  });
});



