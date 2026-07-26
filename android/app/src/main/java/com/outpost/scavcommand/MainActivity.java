package com.outpost.scavcommand;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // Some Android OEM skins auto-boost WebView font size based on the
    // device's accessibility text-size setting. Force it back to 100% so
    // the game's own fixed-px typography (and the scale-to-fit logic in
    // index.html) renders at its actual intended size instead of being
    // inflated unpredictably per-device.
    getBridge().getWebView().getSettings().setTextZoom(100);
  }
}
