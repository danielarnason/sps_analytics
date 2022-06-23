const metricsTool = () => {
    if (!window.distDialog) {
        distDialog = new Dialog({
            title: 'SpS Analytics Metrics',
            id: 'metricsDialog',
            resizable: {
                x: true,
                y: true
            }
        })
        distDialog.addContentHTML("<div id='topList'><h1>TOP 10 temaer</h1><table id='themesList'><tbody><tr><th>Temanavn</th><th>Antal hits</th></tr></tbody></table><h1>TOP 10 værktøjer</h1><table id='toolsList'><tbody><tr><th>Værktøj</th><th>Antal hits</th></tr></tbody></table></div>")
        distDialog.show();
        getData();
    } else {
        clearData();
        getData();
        distDialog.show();
    }
}

const getData = () => {
    var session = spm.getSession()
    var $themesList = spsjq('#themesList > tbody')
    var $toolsList = spsjq('#toolsList > tbody')
    
    var requestThemes = session.createPageRequest('sps_analytics-read-top10-themes')
    requestThemes.call({}, response => {
        var result = response['row'][0]['row']
        for (var i = 0; i < result.length; i++) {
            $themesList.append(`<tr><td>${result[i]['displayname']}</td><td>${result[i]['count']}</td></tr>`)
        }
    })
    
    var requestTools = session.createPageRequest('sps_analytics-read-top10-tools')
    requestTools.call({}, response => {
        var result = response['row'][0]['row']
        for (var i = 0; i < result.length; i++) {
            $toolsList.append(`<tr><td>${result[i]['displayname']}</td><td>${result[i]['count']}</td></tr>`)
        }
    })
    
}

const clearData = () => {
    var $themesList = spsjq('#themesList > tbody')
    var $toolsList = spsjq('#toolsList > tbody')
    $themesList.empty()
    $toolsList.empty()
}