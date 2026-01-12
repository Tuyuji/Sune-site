---ako
title "Using Sune"
---

# Using Sune
This guide assumes you already have the gem registered.

You'll need to enable the gem in the project manager or manually add it in your `project.json`.

> You might want to disable the MiniAudio gem as it's not tested or advised to run the two audio gems at once. 


## Playing a sound
By default, the `default` audio bus is connected to the default audio output, you can create a Audio Pipeline asset and add a bus with the same name of `default` to override this behaviour.

For now let's cover the low-level use case, don't worry as the low-level API is pretty simple.
```cpp
void Init()
{
    using namespace Sune;
    m_player = SuneInterface::Get()->CreatePlayer();
    if(m_player == SoundPlayerId())
    {
        //Error out.
        return;
    }

    SoundPlayerRequestBus::Event(m_player, &SoundPlayerRequestBus::Events::SetAsset, m_audioAssetId);
}

void PlaySound()
{
    using namespace Sune;
    SoundPlayerRequestBus::Event(m_player, &SoundPlayerRequestBus::Events::Play);
}
```

By default, a TuSoundPlayer has `canPlayMultiple` set to true and the bus set to `default`.

### Play a sound using the Audio Pipeline and ATL
> Waiting for the feature to be in a good state.