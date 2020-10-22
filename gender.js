Gendered_word_list = { 'a': -6,
                     'above': -4,
                     'are': -28,
                     'around': -42,
                     'as': -60,
                     'at': -6,
                     'below': -8,
                     'ever': -21,
                     'good': -31,
                     'in': -10,
                     'is': -18,
                     'it': -6,
                     'many': -6,
                     'now': -33,
                     'said': -5,
                     'some': -58,
                     'something': -26,
                     'the': -24,
                     'these': -8,
                      'this': -44,
                      'to': -2,
                      'well': -15,
                      'what': -35,
                      'who': -19,
                      'actually': 49,
                      'am': 42,
                      'and': 4,
                      'be': 17,
                      'because': 55,
                      'but': 43,
                      'everything': 44,
                      'has': 33,
                      'if': 22,
                      'like': 43,
                      'more': 7,
                      'not': 27,
                      'out': 39,
                      'should': 7,
                      'since': 25,
                      'so': 54,
                      'too': 38,
                      'was': 1,
                      'we': 8,
                      'when': 17,
                      'where': 18,
                      'with': 52,
                      'your': 19
                     };
var sumation_m = 0
var sumation_f = 0
var keys = Object.keys(Gendered_word_list);

for (i = 0, len = sample_split, text = ""; i < len; i++){
	if (sample_split.findIndex(i) in keys){
    var word_val = Gendered_word_list[word];
    if (word_val < 0){
      sumation_m = sumation_m + Math.abs(word_val);
    } else{
      sumation_f = sumation_f + word_val
      } 
  }
}
var total_points = sumation_f + sumation_m

var perc_m = sumation_m/total_points
var perc_f = sumation_f/total_points
var range_m_lower = perc_m - .1
var  range_m_upper = perc_m + .1
  

