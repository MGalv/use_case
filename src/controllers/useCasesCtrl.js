var blob = [
  {title: 'Sentiment Analysis', path: 'img/use_case_senti_analysis_2x.png'},
  {title: 'Search Relevance Tuning', path: 'img/use_case_search_rel_2x.png'},
  {title: 'Data Categorization', path: 'img/use_case_data_cat_2x.png'},
  {title: 'Business Data Enrichment', path: 'img/use_case_biz_data_enrich_2x.png'},
  {title: 'Metadata Creation', path: 'img/use_case_metadata_creation_2x.png'},
  {title: 'Image Annotation', path: 'img/use_case_image_annotation_2x.png'},
  {title: 'Transcription', path: 'img/use_case_transcription_2x.png'},
  {title: 'Deduplication', path: 'img/use_case_de_duplication_2x.png'},
  {title: 'Content Moderation', path: 'img/use_case_content_moderation_2x.png'},
  {title: 'Start From Scratch', path: 'img/use_case_start_from_scratch_2x.png'}
];

var controller = angular.module('useCasesCtrl', []);

controller.controller('useCasesCtrl', ['$scope', function($scope){
  $scope.useCases = blob;
  $scope.lastUseCases = blob.splice(8, 2);
}]);
