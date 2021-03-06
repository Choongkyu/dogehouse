import { app, shell } from 'electron';

export const isMac = process.platform === 'darwin'
export const isLinux = process.platform !== 'darwin' && process.platform !== 'win32'
export const REQUEST_TO_SPEAK_KEY = "@keybind/invite";
export const INVITE_KEY = "@keybind/invite";
export const MUTE_KEY = "@keybind/mute";
export const CHAT_KEY = "@keybind/chat";
export const PTT_KEY = "@keybind/ptt";
export const OVERLAY_KEY = "@keybind/overlay";

const REPO_URL = "https://github.com/benawad/dogehouse/";
const DISCUSSION_URL = "https://github.com/benawad/dogehouse/discussions";
const ISSUES_URL = "https://github.com/benawad/dogehouse/issues";

export const ALLOWED_HOSTS = [
    "dogehouse.tv",
    "next.dogehouse.tv",
    "api.dogehouse.tv",
    "dogehouse.tv",
    "github.com",
    "localhost",
    "staging.dogehouse.tv",
    "doge-staging.stripcode.dev",
    "api.twitter.com",
];

export const VOICE_MENU_ID = "@menu/voice_menu";

export const MENU_TEMPLATE: any = [
    ...(isMac ? [{
        label: app.name,
        submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideothers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
        ]
    }] : []),
    {
        label: 'File',
        submenu: [
            isMac ? { role: 'close' } : { role: 'quit' }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            ...(isMac ? [
                { role: 'pasteAndMatchStyle' },
                { role: 'delete' },
                { role: 'selectAll' },
                { type: 'separator' },
                {
                    label: 'Speech',
                    submenu: [
                        { role: 'startSpeaking' },
                        { role: 'stopSpeaking' }
                    ]
                }
            ] : [
                { role: 'delete' },
                { type: 'separator' },
                { role: 'selectAll' }
            ])
        ]
    },
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'forceReload' },
            { role: 'toggleDevTools' },
            { type: 'separator' },
            { role: 'resetZoom' },
            { role: 'zoomIn' },
            { role: 'zoomOut' },
            { type: 'separator' },
            { role: 'togglefullscreen' }
        ]
    },
    {
        label: 'Window',
        submenu: [
            { role: 'minimize' },
            { role: 'zoom' },
            ...(isMac ? [
                { type: 'separator' },
                { role: 'front' },
                { type: 'separator' },
                { role: 'window' }
            ] : [
                { role: 'close' }
            ])
        ]
    },
    {
        role: 'help',
        submenu: [
            {
                label: 'Learn More',
                click: async () => {
                    await shell.openExternal(REPO_URL)
                }
            },
            {
                label: 'Community Discussions',
                click: async () => {
                    await shell.openExternal(DISCUSSION_URL)
                }
            },
            {
                label: 'Search Issues',
                click: async () => {
                    await shell.openExternal(ISSUES_URL)
                }
            }
        ]
    }
];
