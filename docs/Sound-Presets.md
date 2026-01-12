---ako
title "Sound Presets"
---

# Sound Presets
Sound Presets are a way to set default audio import settings for a given wildcard pattern based on the file name (e.g "\*_music", "\*_sound", "\*_ui")

## Global Import Settings
This settings file is how you set up your pattern to presets mapping.

You can change the global import settings by placing a "SoundBuilder.json" in your projects Config folder.
```json
{
    "patterns": [
        {"pattern": "pv_*", "preset": "Music"}
    ]
}
```

## Presets
This file actually contains the preset settings and sets the default audio import settings for the pattern.

Presets are loaded from your projects Config/Sune folder, the file name doesn't matter.

#### @projectroot@/Config/Sune/Music.preset
```json
{
    "defaultSettings": {
        "name": "Music",
        "description": "",
        "format": "Vorbis",
        "loadMethod": "DecodeOnLoad",
        "quality": 0.9
    },
    "platformOverrides": {
        "android": {
            "format": "Vorbis",
            "loadMethod": "DecodeOnDemand",
            "quality": 0.8
        },
        "ios": {
            "format": "Vorbis",
            "loadMethod": "DecodeOnDemand",
            "quality": 0.8
        }
    }
}
```

## Change import settings for a specific asset
TODO

## Troubleshooting
Currently, I have no idea how to properly handle reprocessing assets when the config changes,
so you need to restart the Asset Processor for changes to take effect.