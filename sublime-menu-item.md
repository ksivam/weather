sublime menu item
================
1. create a file name Main.sublime-menu C:\Users\krishnas\AppData\Roaming\Sublime Text 3\Packages\User\Main.sublime-menu
2. more info: http://clarknikdelpowell.com/blog/creating-sublime-text-3-plugins-part-1/
[
    {
        "id": "hello",
        "caption": "Hello",
        "children":
        [
            {
                "id": "text",
                "caption": "connect",
                "children":
                [
                    {
                        "caption": "Talk",
                        "children":
                        [
                            { "caption": "Hello, World!", "command": "echo" }
                        ]
                    }
                ]
            }
        ]
    }
]
