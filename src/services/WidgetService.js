class WidgetService {


	
  createWidget = (topicId, widget) => {
    if(widget===null){
      widget={
                    "id": (new Date()).getTime(),
                    "type": "HEADING",
                    "size": 1,
                    "text": "The Document Object Model"
      };
    }
    for (var i = 0; i < this.courses.length; i++) {
        var curModules = this.courses[i].modules;
        for (var j = 0; j < curModules.length; j++){
          var curLessons = curModules[j].lessons;
          for (var k = 0; k < curLessons.length; k++){
            var curTopics = curLessons[k].topics;
            for (var l = 0; l < curTopics.length; l++){
              if(curTopics[l].id===topicId){
                this.course[i].modules[j].lessons[k].topics[l].widgets.push(widget);
                return this.courses;
              }
            }
          }
        }
    }
    return this.courses;
}
  findWidgets = (topicId) => {
    for (var i = 0; i < this.courses.length; i++) {
        var curModules = this.courses[i].modules;
        for (var j = 0; j < curModules.length; j++){
          var curLessons = curModules[j].lessons;
          for (var k = 0; k < curLessons.length; k++){
            var curTopics = curLessons[k].topics;
            for (var l = 0; l < curTopics.length; l++){
              if(curTopics[l].id===topicId){
                return curTopics[l].widgets;
              }
            }
          }
        }
    } 
    return null;   
  }

  findWidget = (widgetId) => {
    for (var i = 0; i < this.courses.length; i++) {
        var curModules = this.courses[i].modules;
        for (var j = 0; j < curModules.length; j++){
          var curLessons = curModules[j].lessons;
          for (var k = 0; k < curLessons.length; k++){
            var curTopics = curLessons[k].topics;
            for (var l = 0; l < curTopics.length; l++){
                for(var p=0; p<curTopics[l].widgets.length; p++){
                  if (curTopics[l].widgets[p].id===widgetId){
                    return curTopics[l].widgets[p];
                  }
                }
            }
          }
        }
    } 
    return null;   
  }


  updateWidget = (widgetId, widget) => {
    for (var i = 0; i < this.courses.length; i++) {
        var curModules = this.courses[i].modules;
        for (var j = 0; j < curModules.length; j++){
          var curLessons = curModules[j].lessons;
          for (var k = 0; k < curLessons.length; k++){
            var curTopics = curLessons[k].topics;
            for (var l = 0; l < curTopics.length; l++){
                for(var p=0; p<curTopics[l].widgets.length; p++){
                  if (curTopics[l].widgets[p].id===widgetId){
                    this.course[i].modules[j].lessons[k].topics[l].widgets[p] = widget;
                    return this.courses;
                  }
                }
            }
          }
        }
    }
    return this.courses;     
  }


  deleteWidget = (widgetId) => {
        for (var i = 0; i < this.courses.length; i++) {
        var curModules = this.courses[i].modules;
        for (var j = 0; j < curModules.length; j++){
          var curLessons = curModules[j].lessons;
          for (var k = 0; k < curLessons.length; k++){
            var curTopics = curLessons[k].topics;
            for (var l = 0; l < curTopics.length; l++){
                for(var p=0; p<curTopics[l].widgets.length; p++){
                  if (curTopics[l].widgets[p].id===widgetId){
                       this.course[i].modules[j].lessons[k].topics[l].widgets = this.course[i].modules[j].lessons[k].topics[l].widgets.filter(
                            widget => widget.id !== widgetId)
                      return this.courses;                   
                  }

                }
            }
          }
        }
    }
    return this.courses;
  }

}

export default WidgetService