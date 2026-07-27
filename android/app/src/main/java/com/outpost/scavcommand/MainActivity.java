package com.outpost.scavcommand;

import android.os.Bundle;
import androidx.core.view.WindowCompat;
import androidx.core.view.WindowInsetsCompat;
import androidx.core.view.WindowInsetsControllerCompat;
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

    // Without this, the status bar and navigation bar sit on screen the
    // whole time, same as a normal browser tab — this hides both so the
    // game actually runs edge-to-edge like a real installed app.
    // BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE means swiping in from an
    // edge still temporarily reveals them (so the player always has a
    // way back to Android's own navigation), and they auto-hide again
    // a moment later rather than staying stuck open.
    hideSystemBars();
  }

  @Override
  public void onWindowFocusChanged(boolean hasFocus) {
    super.onWindowFocusChanged(hasFocus);
    // Re-hide whenever the window regains focus — e.g. coming back from
    // the recent-apps switcher, a permission dialog, or the temporary
    // reveal from an edge-swipe timing out. Without this the bars can
    // stay visible after the app is backgrounded and returned to.
    if (hasFocus) hideSystemBars();
  }

  private void hideSystemBars() {
    WindowCompat.setDecorFitsSystemWindows(getWindow(), false);
    WindowInsetsControllerCompat controller =
        WindowCompat.getInsetsController(getWindow(), getWindow().getDecorView());
    if (controller != null) {
      controller.setSystemBarsBehavior(
          WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE);
      controller.hide(WindowInsetsCompat.Type.systemBars());
    }
  }
}
