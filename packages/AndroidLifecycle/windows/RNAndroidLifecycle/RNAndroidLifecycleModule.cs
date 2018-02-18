using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Android.Lifecycle.RNAndroidLifecycle
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNAndroidLifecycleModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNAndroidLifecycleModule"/>.
        /// </summary>
        internal RNAndroidLifecycleModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNAndroidLifecycle";
            }
        }
    }
}
