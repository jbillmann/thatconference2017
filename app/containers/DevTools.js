import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import MultipleMonitors from 'redux-devtools-multiple-monitors';
import ImportExportMonitor from 'redux-import-export-monitor';

const DevTools = createDevTools(
    <MultipleMonitors>
        <LogMonitor theme='tomorrow' />
        <ImportExportMonitor />
    </MultipleMonitors>
);

export default DevTools;