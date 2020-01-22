
const authorMessage = {
  id: 1,
  scoring: [
    { name: 'Sincerité', value: Math.floor(Math.random() * 100) + 2},
    { name: 'Honnêteté', value: Math.floor(Math.random() * 100) + 2},
    { name: 'Hypocrisie', value: Math.floor(Math.random() * 100) + 2},
    { name: 'Sagesse', value: Math.floor(Math.random() * 100) + 2},
    { name: 'Sources', value: Math.floor(Math.random() * 100) + 2},
    { name: 'Arguments', value: Math.floor(Math.random() * 100) + 2},
    { name: 'Agressivité', value: Math.floor(Math.random() * 100) + 2},
    { name: 'Colère', value: Math.floor(Math.random() * 100) + 2},
    { name: 'Manipilation', value: Math.floor(Math.random() * 100) + 2},
    { name: 'Mensonge', value: Math.floor(Math.random() * 100) + 2},
    { name: 'Faits', value: Math.floor(Math.random() * 100) + 2},
    { name: 'Objectivité', value: Math.floor(Math.random() * 100) + 2},
  ],
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra justo vitae lorem rutrum porttitor. Nullam purus diam, iaculis eu sapien sed, imperdiet efficitur purus. Mauris erat nulla, feugiat nec sapien ut, blandit viverra ligula. Vestibulum posuere pretium nulla. Donec aliquam interdum faucibus. Nam pharetra tellus quis malesuada vulputate. Nulla gravida, lectus vel sagittis finibus, lacus est auctor ligula, et hendrerit tellus dui in odio.

Cras aliquam cursus rhoncus. Aliquam rhoncus nunc velit, non maximus mauris euismod at. Sed vitae ex euismod massa rhoncus blandit. Phasellus mi lectus, pretium eu scelerisque nec, sodales sed tellus. Etiam iaculis ultrices dui. Aliquam feugiat nibh eu porta efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut congue leo sed eros ultrices, non tempor neque porttitor. Nulla facilisi. Sed semper nisi libero, et bibendum augue volutpat eu. Fusce nec molestie mauris, at ornare ligula. Morbi ac est ipsum. Cras ultricies efficitur eros, sit amet faucibus erat aliquet eu. Pellentesque sapien lorem, varius vitae felis sollicitudin, bibendum accumsan magna. Fusce mollis nulla sed justo efficitur, in accumsan diam interdum.

Integer euismod faucibus tellus sit amet commodo. Pellentesque fringilla felis fermentum imperdiet ornare. Suspendisse posuere massa tincidunt, vestibulum lorem at, iaculis urna. Integer faucibus libero mi, id ullamcorper urna aliquet eget. Aenean ut iaculis lacus. Phasellus laoreet sem vitae lacus dignissim, eu porta velit molestie. Etiam sodales, nunc at ornare dictum, orci dui laoreet neque, sed cursus nisl enim non leo. Maecenas id risus lectus. Fusce felis enim, venenatis sed odio eu, volutpat scelerisque lectus. Ut et tincidunt dolor. Donec sollicitudin elit eget suscipit aliquet. Aenean tristique, nisi eu accumsan feugiat, eros ligula viverra lacus, quis pellentesque massa arcu sed augue. Aliquam faucibus ullamcorper lorem sit amet bibendum. Etiam consequat porttitor accumsan. Fusce sit amet condimentum dolor. Vivamus fermentum dapibus nisl, eu dapibus tortor bibendum at.

Etiam ac suscipit dolor. Cras ac libero vitae augue faucibus iaculis nec vel justo. Proin id neque sem. Nam non augue tempus dolor lacinia tincidunt. Etiam vitae mauris pharetra, blandit massa sit amet, placerat nunc. Nunc eu sapien eu est euismod mollis. Suspendisse id efficitur nulla. Curabitur pulvinar in mauris non pretium. Cras pretium dolor eu eros porta blandit. Ut id suscipit lorem, at imperdiet ante. Proin diam nulla, venenatis a facilisis sit amet, ultrices vitae eros. Ut enim velit, finibus non suscipit eu, condimentum ultrices dui. Integer blandit quam erat. Vivamus varius lacinia mi vitae varius.

Vestibulum aliquam iaculis lectus, sit amet placerat dolor porttitor sit amet. Phasellus imperdiet sit amet nunc a feugiat. Pellentesque lectus urna, mollis dictum pharetra a, cursus eu massa. Ut eget elementum ante. Proin pretium maximus ex. Quisque lacinia dolor quis molestie placerat. Fusce mauris nisi, lacinia at molestie luctus, commodo sit amet mi. Sed aliquet porttitor dapibus. Vivamus cursus cursus magna, feugiat rhoncus leo vulputate nec. Aenean feugiat et ligula sed consequat.

Duis eu est leo. Sed volutpat magna vel enim lacinia molestie. Ut pellentesque mi sit amet ipsum pharetra, ac commodo est scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum porta convallis nisl, eu mollis turpis pharetra eget. Morbi non leo augue. Fusce porttitor libero ac consequat lobortis. Fusce non finibus dui. Proin id nisl faucibus, laoreet augue maximus, bibendum dolor. Aenean tincidunt fermentum hendrerit. Phasellus quis varius urna. Donec dignissim maximus blandit. Praesent faucibus posuere quam quis scelerisque. Suspendisse viverra consectetur lacus, at lobortis quam dapibus sed. Pellentesque est eros, tincidunt vitae vestibulum non, tristique sodales est.

Suspendisse eu nunc non diam ultrices mattis a a erat. Donec commodo dui et mi finibus, et condimentum arcu fringilla. Mauris vestibulum lobortis mi ac tristique. Nunc sit amet ullamcorper dolor. Duis porttitor ante eget placerat pulvinar. Nunc sit amet diam neque. Aenean molestie mi ante, et viverra massa mattis non. Duis mattis gravida urna.

Maecenas quis viverra enim. Aliquam erat volutpat. Vivamus feugiat tincidunt sapien at pharetra. Maecenas sed purus eget orci pulvinar porttitor eu ac lorem. Morbi quis nunc magna. Nulla in ante ac erat ullamcorper vehicula. Donec non neque eget ipsum aliquet gravida in et est. Integer ornare a nisl vitae tristique. Ut ultricies ultrices hendrerit. Ut rhoncus tellus neque.

Curabitur felis lectus, venenatis tempor fringilla eget, scelerisque id velit. Phasellus iaculis ullamcorper risus, in sagittis tellus. Aenean varius ex eu dolor euismod molestie. Fusce mollis bibendum lectus, at placerat tellus dapibus eget. Nam aliquet elit et augue cursus pulvinar. Aliquam pellentesque maximus bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius ut augue et congue. Vivamus non est dolor. Donec luctus faucibus libero, in pharetra turpis volutpat a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc semper vehicula ex et fringilla. Mauris eleifend arcu ac nunc tincidunt, et tristique mi posuere. Aliquam non velit diam.

In vel vestibulum turpis, nec dapibus urna. Vestibulum aliquam pulvinar tellus, quis gravida nisi vestibulum ac. Pellentesque sollicitudin et felis in efficitur. Nulla mattis elit nisl, vel sollicitudin turpis lacinia et. Nam sit amet feugiat enim. Nunc aliquam nibh dapibus, feugiat massa sit amet, laoreet nunc. Nunc hendrerit magna elit, at lacinia lectus dictum in. Vivamus vehicula condimentum purus eget varius. Quisque quis nibh tincidunt, dapibus ante quis, laoreet nisl. Nulla elementum mollis tellus porttitor imperdiet.`,

}
const messages = [
  {
    id: 2,
    scoring: [
      { name: 'Sincerité', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Honnêteté', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Hypocrisie', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Sagesse', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Sources', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Arguments', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Agressivité', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Colère', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Manipilation', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Mensonge', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Faits', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Objectivité', value: Math.floor(Math.random() * 100) + 2},
    ],
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra justo vitae lorem rutrum porttitor. Nullam purus diam, iaculis eu sapien sed, imperdiet efficitur purus. Mauris erat nulla, feugiat nec sapien ut, blandit viverra ligula. Vestibulum posuere pretium nulla. Donec aliquam interdum faucibus. Nam pharetra tellus quis malesuada vulputate. Nulla gravida, lectus vel sagittis finibus, lacus est auctor ligula, et hendrerit tellus dui in odio.

      Cras aliquam cursus rhoncus. Aliquam rhoncus nunc velit, non maximus mauris euismod at. Sed vitae ex euismod massa rhoncus blandit. Phasellus mi lectus, pretium eu scelerisque nec, sodales sed tellus. Etiam iaculis ultrices dui. Aliquam feugiat nibh eu porta efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut congue leo sed eros ultrices, non tempor neque porttitor. Nulla facilisi. Sed semper nisi libero, et bibendum augue volutpat eu. Fusce nec molestie mauris, at ornare ligula. Morbi ac est ipsum. Cras ultricies efficitur eros, sit amet faucibus erat aliquet eu. Pellentesque sapien lorem, varius vitae felis sollicitudin, bibendum accumsan magna. Fusce mollis nulla sed justo efficitur, in accumsan diam interdum.

      Integer euismod faucibus tellus sit amet commodo. Pellentesque fringilla felis fermentum imperdiet ornare. Suspendisse posuere massa tincidunt, vestibulum lorem at, iaculis urna. Integer faucibus libero mi, id ullamcorper urna aliquet eget. Aenean ut iaculis lacus. Phasellus laoreet sem vitae lacus dignissim, eu porta velit molestie. Etiam sodales, nunc at ornare dictum, orci dui laoreet neque, sed cursus nisl enim non leo. Maecenas id risus lectus. Fusce felis enim, venenatis sed odio eu, volutpat scelerisque lectus. Ut et tincidunt dolor. Donec sollicitudin elit eget suscipit aliquet. Aenean tristique, nisi eu accumsan feugiat, eros ligula viverra lacus, quis pellentesque massa arcu sed augue. Aliquam faucibus ullamcorper lorem sit amet bibendum. Etiam consequat porttitor accumsan. Fusce sit amet condimentum dolor. Vivamus fermentum dapibus nisl, eu dapibus tortor bibendum at.

      Etiam ac suscipit dolor. Cras ac libero vitae augue faucibus iaculis nec vel justo. Proin id neque sem. Nam non augue tempus dolor lacinia tincidunt. Etiam vitae mauris pharetra, blandit massa sit amet, placerat nunc. Nunc eu sapien eu est euismod mollis. Suspendisse id efficitur nulla. Curabitur pulvinar in mauris non pretium. Cras pretium dolor eu eros porta blandit. Ut id suscipit lorem, at imperdiet ante. Proin diam nulla, venenatis a facilisis sit amet, ultrices vitae eros. Ut enim velit, finibus non suscipit eu, condimentum ultrices dui. Integer blandit quam erat. Vivamus varius lacinia mi vitae varius.

      Vestibulum aliquam iaculis lectus, sit amet placerat dolor porttitor sit amet. Phasellus imperdiet sit amet nunc a feugiat. Pellentesque lectus urna, mollis dictum pharetra a, cursus eu massa. Ut eget elementum ante. Proin pretium maximus ex. Quisque lacinia dolor quis molestie placerat. Fusce mauris nisi, lacinia at molestie luctus, commodo sit amet mi. Sed aliquet porttitor dapibus. Vivamus cursus cursus magna, feugiat rhoncus leo vulputate nec. Aenean feugiat et ligula sed consequat.

      Duis eu est leo. Sed volutpat magna vel enim lacinia molestie. Ut pellentesque mi sit amet ipsum pharetra, ac commodo est scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum porta convallis nisl, eu mollis turpis pharetra eget. Morbi non leo augue. Fusce porttitor libero ac consequat lobortis. Fusce non finibus dui. Proin id nisl faucibus, laoreet augue maximus, bibendum dolor. Aenean tincidunt fermentum hendrerit. Phasellus quis varius urna. Donec dignissim maximus blandit. Praesent faucibus posuere quam quis scelerisque. Suspendisse viverra consectetur lacus, at lobortis quam dapibus sed. Pellentesque est eros, tincidunt vitae vestibulum non, tristique sodales est.

      Suspendisse eu nunc non diam ultrices mattis a a erat. Donec commodo dui et mi finibus, et condimentum arcu fringilla. Mauris vestibulum lobortis mi ac tristique. Nunc sit amet ullamcorper dolor. Duis porttitor ante eget placerat pulvinar. Nunc sit amet diam neque. Aenean molestie mi ante, et viverra massa mattis non. Duis mattis gravida urna.

      Maecenas quis viverra enim. Aliquam erat volutpat. Vivamus feugiat tincidunt sapien at pharetra. Maecenas sed purus eget orci pulvinar porttitor eu ac lorem. Morbi quis nunc magna. Nulla in ante ac erat ullamcorper vehicula. Donec non neque eget ipsum aliquet gravida in et est. Integer ornare a nisl vitae tristique. Ut ultricies ultrices hendrerit. Ut rhoncus tellus neque.

      Curabitur felis lectus, venenatis tempor fringilla eget, scelerisque id velit. Phasellus iaculis ullamcorper risus, in sagittis tellus. Aenean varius ex eu dolor euismod molestie. Fusce mollis bibendum lectus, at placerat tellus dapibus eget. Nam aliquet elit et augue cursus pulvinar. Aliquam pellentesque maximus bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius ut augue et congue. Vivamus non est dolor. Donec luctus faucibus libero, in pharetra turpis volutpat a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc semper vehicula ex et fringilla. Mauris eleifend arcu ac nunc tincidunt, et tristique mi posuere. Aliquam non velit diam.

      In vel vestibulum turpis, nec dapibus urna. Vestibulum aliquam pulvinar tellus, quis gravida nisi vestibulum ac. Pellentesque sollicitudin et felis in efficitur. Nulla mattis elit nisl, vel sollicitudin turpis lacinia et. Nam sit amet feugiat enim. Nunc aliquam nibh dapibus, feugiat massa sit amet, laoreet nunc. Nunc hendrerit magna elit, at lacinia lectus dictum in. Vivamus vehicula condimentum purus eget varius. Quisque quis nibh tincidunt, dapibus ante quis, laoreet nisl. Nulla elementum mollis tellus porttitor imperdiet.`,

  },
  {
    id: 3,
    scoring: [
      { name: 'Sincerité', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Honnêteté', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Hypocrisie', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Sagesse', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Sources', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Arguments', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Agressivité', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Colère', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Manipilation', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Mensonge', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Faits', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Objectivité', value: Math.floor(Math.random() * 100) + 2},
    ],
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra justo vitae lorem rutrum porttitor. Nullam purus diam, iaculis eu sapien sed, imperdiet efficitur purus. Mauris erat nulla, feugiat nec sapien ut, blandit viverra ligula. Vestibulum posuere pretium nulla. Donec aliquam interdum faucibus. Nam pharetra tellus quis malesuada vulputate. Nulla gravida, lectus vel sagittis finibus, lacus est auctor ligula, et hendrerit tellus dui in odio.

      Cras aliquam cursus rhoncus. Aliquam rhoncus nunc velit, non maximus mauris euismod at. Sed vitae ex euismod massa rhoncus blandit. Phasellus mi lectus, pretium eu scelerisque nec, sodales sed tellus. Etiam iaculis ultrices dui. Aliquam feugiat nibh eu porta efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut congue leo sed eros ultrices, non tempor neque porttitor. Nulla facilisi. Sed semper nisi libero, et bibendum augue volutpat eu. Fusce nec molestie mauris, at ornare ligula. Morbi ac est ipsum. Cras ultricies efficitur eros, sit amet faucibus erat aliquet eu. Pellentesque sapien lorem, varius vitae felis sollicitudin, bibendum accumsan magna. Fusce mollis nulla sed justo efficitur, in accumsan diam interdum.

      Integer euismod faucibus tellus sit amet commodo. Pellentesque fringilla felis fermentum imperdiet ornare. Suspendisse posuere massa tincidunt, vestibulum lorem at, iaculis urna. Integer faucibus libero mi, id ullamcorper urna aliquet eget. Aenean ut iaculis lacus. Phasellus laoreet sem vitae lacus dignissim, eu porta velit molestie. Etiam sodales, nunc at ornare dictum, orci dui laoreet neque, sed cursus nisl enim non leo. Maecenas id risus lectus. Fusce felis enim, venenatis sed odio eu, volutpat scelerisque lectus. Ut et tincidunt dolor. Donec sollicitudin elit eget suscipit aliquet. Aenean tristique, nisi eu accumsan feugiat, eros ligula viverra lacus, quis pellentesque massa arcu sed augue. Aliquam faucibus ullamcorper lorem sit amet bibendum. Etiam consequat porttitor accumsan. Fusce sit amet condimentum dolor. Vivamus fermentum dapibus nisl, eu dapibus tortor bibendum at.

      Etiam ac suscipit dolor. Cras ac libero vitae augue faucibus iaculis nec vel justo. Proin id neque sem. Nam non augue tempus dolor lacinia tincidunt. Etiam vitae mauris pharetra, blandit massa sit amet, placerat nunc. Nunc eu sapien eu est euismod mollis. Suspendisse id efficitur nulla. Curabitur pulvinar in mauris non pretium. Cras pretium dolor eu eros porta blandit. Ut id suscipit lorem, at imperdiet ante. Proin diam nulla, venenatis a facilisis sit amet, ultrices vitae eros. Ut enim velit, finibus non suscipit eu, condimentum ultrices dui. Integer blandit quam erat. Vivamus varius lacinia mi vitae varius.

      Vestibulum aliquam iaculis lectus, sit amet placerat dolor porttitor sit amet. Phasellus imperdiet sit amet nunc a feugiat. Pellentesque lectus urna, mollis dictum pharetra a, cursus eu massa. Ut eget elementum ante. Proin pretium maximus ex. Quisque lacinia dolor quis molestie placerat. Fusce mauris nisi, lacinia at molestie luctus, commodo sit amet mi. Sed aliquet porttitor dapibus. Vivamus cursus cursus magna, feugiat rhoncus leo vulputate nec. Aenean feugiat et ligula sed consequat.

      Duis eu est leo. Sed volutpat magna vel enim lacinia molestie. Ut pellentesque mi sit amet ipsum pharetra, ac commodo est scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum porta convallis nisl, eu mollis turpis pharetra eget. Morbi non leo augue. Fusce porttitor libero ac consequat lobortis. Fusce non finibus dui. Proin id nisl faucibus, laoreet augue maximus, bibendum dolor. Aenean tincidunt fermentum hendrerit. Phasellus quis varius urna. Donec dignissim maximus blandit. Praesent faucibus posuere quam quis scelerisque. Suspendisse viverra consectetur lacus, at lobortis quam dapibus sed. Pellentesque est eros, tincidunt vitae vestibulum non, tristique sodales est.

      Suspendisse eu nunc non diam ultrices mattis a a erat. Donec commodo dui et mi finibus, et condimentum arcu fringilla. Mauris vestibulum lobortis mi ac tristique. Nunc sit amet ullamcorper dolor. Duis porttitor ante eget placerat pulvinar. Nunc sit amet diam neque. Aenean molestie mi ante, et viverra massa mattis non. Duis mattis gravida urna.

      Maecenas quis viverra enim. Aliquam erat volutpat. Vivamus feugiat tincidunt sapien at pharetra. Maecenas sed purus eget orci pulvinar porttitor eu ac lorem. Morbi quis nunc magna. Nulla in ante ac erat ullamcorper vehicula. Donec non neque eget ipsum aliquet gravida in et est. Integer ornare a nisl vitae tristique. Ut ultricies ultrices hendrerit. Ut rhoncus tellus neque.

      Curabitur felis lectus, venenatis tempor fringilla eget, scelerisque id velit. Phasellus iaculis ullamcorper risus, in sagittis tellus. Aenean varius ex eu dolor euismod molestie. Fusce mollis bibendum lectus, at placerat tellus dapibus eget. Nam aliquet elit et augue cursus pulvinar. Aliquam pellentesque maximus bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius ut augue et congue. Vivamus non est dolor. Donec luctus faucibus libero, in pharetra turpis volutpat a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc semper vehicula ex et fringilla. Mauris eleifend arcu ac nunc tincidunt, et tristique mi posuere. Aliquam non velit diam.

      In vel vestibulum turpis, nec dapibus urna. Vestibulum aliquam pulvinar tellus, quis gravida nisi vestibulum ac. Pellentesque sollicitudin et felis in efficitur. Nulla mattis elit nisl, vel sollicitudin turpis lacinia et. Nam sit amet feugiat enim. Nunc aliquam nibh dapibus, feugiat massa sit amet, laoreet nunc. Nunc hendrerit magna elit, at lacinia lectus dictum in. Vivamus vehicula condimentum purus eget varius. Quisque quis nibh tincidunt, dapibus ante quis, laoreet nisl. Nulla elementum mollis tellus porttitor imperdiet.`,

  },
  {
    id: 4,
    scoring: [
      { name: 'Sincerité', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Honnêteté', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Hypocrisie', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Sagesse', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Sources', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Arguments', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Agressivité', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Colère', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Manipilation', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Mensonge', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Faits', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Objectivité', value: Math.floor(Math.random() * 100) + 2},
    ],
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra justo vitae lorem rutrum porttitor. Nullam purus diam, iaculis eu sapien sed, imperdiet efficitur purus. Mauris erat nulla, feugiat nec sapien ut, blandit viverra ligula. Vestibulum posuere pretium nulla. Donec aliquam interdum faucibus. Nam pharetra tellus quis malesuada vulputate. Nulla gravida, lectus vel sagittis finibus, lacus est auctor ligula, et hendrerit tellus dui in odio.

      Cras aliquam cursus rhoncus. Aliquam rhoncus nunc velit, non maximus mauris euismod at. Sed vitae ex euismod massa rhoncus blandit. Phasellus mi lectus, pretium eu scelerisque nec, sodales sed tellus. Etiam iaculis ultrices dui. Aliquam feugiat nibh eu porta efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut congue leo sed eros ultrices, non tempor neque porttitor. Nulla facilisi. Sed semper nisi libero, et bibendum augue volutpat eu. Fusce nec molestie mauris, at ornare ligula. Morbi ac est ipsum. Cras ultricies efficitur eros, sit amet faucibus erat aliquet eu. Pellentesque sapien lorem, varius vitae felis sollicitudin, bibendum accumsan magna. Fusce mollis nulla sed justo efficitur, in accumsan diam interdum.

      Integer euismod faucibus tellus sit amet commodo. Pellentesque fringilla felis fermentum imperdiet ornare. Suspendisse posuere massa tincidunt, vestibulum lorem at, iaculis urna. Integer faucibus libero mi, id ullamcorper urna aliquet eget. Aenean ut iaculis lacus. Phasellus laoreet sem vitae lacus dignissim, eu porta velit molestie. Etiam sodales, nunc at ornare dictum, orci dui laoreet neque, sed cursus nisl enim non leo. Maecenas id risus lectus. Fusce felis enim, venenatis sed odio eu, volutpat scelerisque lectus. Ut et tincidunt dolor. Donec sollicitudin elit eget suscipit aliquet. Aenean tristique, nisi eu accumsan feugiat, eros ligula viverra lacus, quis pellentesque massa arcu sed augue. Aliquam faucibus ullamcorper lorem sit amet bibendum. Etiam consequat porttitor accumsan. Fusce sit amet condimentum dolor. Vivamus fermentum dapibus nisl, eu dapibus tortor bibendum at.

      Etiam ac suscipit dolor. Cras ac libero vitae augue faucibus iaculis nec vel justo. Proin id neque sem. Nam non augue tempus dolor lacinia tincidunt. Etiam vitae mauris pharetra, blandit massa sit amet, placerat nunc. Nunc eu sapien eu est euismod mollis. Suspendisse id efficitur nulla. Curabitur pulvinar in mauris non pretium. Cras pretium dolor eu eros porta blandit. Ut id suscipit lorem, at imperdiet ante. Proin diam nulla, venenatis a facilisis sit amet, ultrices vitae eros. Ut enim velit, finibus non suscipit eu, condimentum ultrices dui. Integer blandit quam erat. Vivamus varius lacinia mi vitae varius.

      Vestibulum aliquam iaculis lectus, sit amet placerat dolor porttitor sit amet. Phasellus imperdiet sit amet nunc a feugiat. Pellentesque lectus urna, mollis dictum pharetra a, cursus eu massa. Ut eget elementum ante. Proin pretium maximus ex. Quisque lacinia dolor quis molestie placerat. Fusce mauris nisi, lacinia at molestie luctus, commodo sit amet mi. Sed aliquet porttitor dapibus. Vivamus cursus cursus magna, feugiat rhoncus leo vulputate nec. Aenean feugiat et ligula sed consequat.

      Duis eu est leo. Sed volutpat magna vel enim lacinia molestie. Ut pellentesque mi sit amet ipsum pharetra, ac commodo est scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum porta convallis nisl, eu mollis turpis pharetra eget. Morbi non leo augue. Fusce porttitor libero ac consequat lobortis. Fusce non finibus dui. Proin id nisl faucibus, laoreet augue maximus, bibendum dolor. Aenean tincidunt fermentum hendrerit. Phasellus quis varius urna. Donec dignissim maximus blandit. Praesent faucibus posuere quam quis scelerisque. Suspendisse viverra consectetur lacus, at lobortis quam dapibus sed. Pellentesque est eros, tincidunt vitae vestibulum non, tristique sodales est.

      Suspendisse eu nunc non diam ultrices mattis a a erat. Donec commodo dui et mi finibus, et condimentum arcu fringilla. Mauris vestibulum lobortis mi ac tristique. Nunc sit amet ullamcorper dolor. Duis porttitor ante eget placerat pulvinar. Nunc sit amet diam neque. Aenean molestie mi ante, et viverra massa mattis non. Duis mattis gravida urna.

      Maecenas quis viverra enim. Aliquam erat volutpat. Vivamus feugiat tincidunt sapien at pharetra. Maecenas sed purus eget orci pulvinar porttitor eu ac lorem. Morbi quis nunc magna. Nulla in ante ac erat ullamcorper vehicula. Donec non neque eget ipsum aliquet gravida in et est. Integer ornare a nisl vitae tristique. Ut ultricies ultrices hendrerit. Ut rhoncus tellus neque.

      Curabitur felis lectus, venenatis tempor fringilla eget, scelerisque id velit. Phasellus iaculis ullamcorper risus, in sagittis tellus. Aenean varius ex eu dolor euismod molestie. Fusce mollis bibendum lectus, at placerat tellus dapibus eget. Nam aliquet elit et augue cursus pulvinar. Aliquam pellentesque maximus bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius ut augue et congue. Vivamus non est dolor. Donec luctus faucibus libero, in pharetra turpis volutpat a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc semper vehicula ex et fringilla. Mauris eleifend arcu ac nunc tincidunt, et tristique mi posuere. Aliquam non velit diam.

      In vel vestibulum turpis, nec dapibus urna. Vestibulum aliquam pulvinar tellus, quis gravida nisi vestibulum ac. Pellentesque sollicitudin et felis in efficitur. Nulla mattis elit nisl, vel sollicitudin turpis lacinia et. Nam sit amet feugiat enim. Nunc aliquam nibh dapibus, feugiat massa sit amet, laoreet nunc. Nunc hendrerit magna elit, at lacinia lectus dictum in. Vivamus vehicula condimentum purus eget varius. Quisque quis nibh tincidunt, dapibus ante quis, laoreet nisl. Nulla elementum mollis tellus porttitor imperdiet.`,

  },
  {
    id: 5,
    scoring: [
      { name: 'Sincerité', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Honnêteté', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Hypocrisie', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Sagesse', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Sources', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Arguments', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Agressivité', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Colère', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Manipilation', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Mensonge', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Faits', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Objectivité', value: Math.floor(Math.random() * 100) + 2},
    ],
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra justo vitae lorem rutrum porttitor. Nullam purus diam, iaculis eu sapien sed, imperdiet efficitur purus. Mauris erat nulla, feugiat nec sapien ut, blandit viverra ligula. Vestibulum posuere pretium nulla. Donec aliquam interdum faucibus. Nam pharetra tellus quis malesuada vulputate. Nulla gravida, lectus vel sagittis finibus, lacus est auctor ligula, et hendrerit tellus dui in odio.

      Cras aliquam cursus rhoncus. Aliquam rhoncus nunc velit, non maximus mauris euismod at. Sed vitae ex euismod massa rhoncus blandit. Phasellus mi lectus, pretium eu scelerisque nec, sodales sed tellus. Etiam iaculis ultrices dui. Aliquam feugiat nibh eu porta efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut congue leo sed eros ultrices, non tempor neque porttitor. Nulla facilisi. Sed semper nisi libero, et bibendum augue volutpat eu. Fusce nec molestie mauris, at ornare ligula. Morbi ac est ipsum. Cras ultricies efficitur eros, sit amet faucibus erat aliquet eu. Pellentesque sapien lorem, varius vitae felis sollicitudin, bibendum accumsan magna. Fusce mollis nulla sed justo efficitur, in accumsan diam interdum.

      Integer euismod faucibus tellus sit amet commodo. Pellentesque fringilla felis fermentum imperdiet ornare. Suspendisse posuere massa tincidunt, vestibulum lorem at, iaculis urna. Integer faucibus libero mi, id ullamcorper urna aliquet eget. Aenean ut iaculis lacus. Phasellus laoreet sem vitae lacus dignissim, eu porta velit molestie. Etiam sodales, nunc at ornare dictum, orci dui laoreet neque, sed cursus nisl enim non leo. Maecenas id risus lectus. Fusce felis enim, venenatis sed odio eu, volutpat scelerisque lectus. Ut et tincidunt dolor. Donec sollicitudin elit eget suscipit aliquet. Aenean tristique, nisi eu accumsan feugiat, eros ligula viverra lacus, quis pellentesque massa arcu sed augue. Aliquam faucibus ullamcorper lorem sit amet bibendum. Etiam consequat porttitor accumsan. Fusce sit amet condimentum dolor. Vivamus fermentum dapibus nisl, eu dapibus tortor bibendum at.

      Etiam ac suscipit dolor. Cras ac libero vitae augue faucibus iaculis nec vel justo. Proin id neque sem. Nam non augue tempus dolor lacinia tincidunt. Etiam vitae mauris pharetra, blandit massa sit amet, placerat nunc. Nunc eu sapien eu est euismod mollis. Suspendisse id efficitur nulla. Curabitur pulvinar in mauris non pretium. Cras pretium dolor eu eros porta blandit. Ut id suscipit lorem, at imperdiet ante. Proin diam nulla, venenatis a facilisis sit amet, ultrices vitae eros. Ut enim velit, finibus non suscipit eu, condimentum ultrices dui. Integer blandit quam erat. Vivamus varius lacinia mi vitae varius.

      Vestibulum aliquam iaculis lectus, sit amet placerat dolor porttitor sit amet. Phasellus imperdiet sit amet nunc a feugiat. Pellentesque lectus urna, mollis dictum pharetra a, cursus eu massa. Ut eget elementum ante. Proin pretium maximus ex. Quisque lacinia dolor quis molestie placerat. Fusce mauris nisi, lacinia at molestie luctus, commodo sit amet mi. Sed aliquet porttitor dapibus. Vivamus cursus cursus magna, feugiat rhoncus leo vulputate nec. Aenean feugiat et ligula sed consequat.

      Duis eu est leo. Sed volutpat magna vel enim lacinia molestie. Ut pellentesque mi sit amet ipsum pharetra, ac commodo est scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum porta convallis nisl, eu mollis turpis pharetra eget. Morbi non leo augue. Fusce porttitor libero ac consequat lobortis. Fusce non finibus dui. Proin id nisl faucibus, laoreet augue maximus, bibendum dolor. Aenean tincidunt fermentum hendrerit. Phasellus quis varius urna. Donec dignissim maximus blandit. Praesent faucibus posuere quam quis scelerisque. Suspendisse viverra consectetur lacus, at lobortis quam dapibus sed. Pellentesque est eros, tincidunt vitae vestibulum non, tristique sodales est.

      Suspendisse eu nunc non diam ultrices mattis a a erat. Donec commodo dui et mi finibus, et condimentum arcu fringilla. Mauris vestibulum lobortis mi ac tristique. Nunc sit amet ullamcorper dolor. Duis porttitor ante eget placerat pulvinar. Nunc sit amet diam neque. Aenean molestie mi ante, et viverra massa mattis non. Duis mattis gravida urna.

      Maecenas quis viverra enim. Aliquam erat volutpat. Vivamus feugiat tincidunt sapien at pharetra. Maecenas sed purus eget orci pulvinar porttitor eu ac lorem. Morbi quis nunc magna. Nulla in ante ac erat ullamcorper vehicula. Donec non neque eget ipsum aliquet gravida in et est. Integer ornare a nisl vitae tristique. Ut ultricies ultrices hendrerit. Ut rhoncus tellus neque.

      Curabitur felis lectus, venenatis tempor fringilla eget, scelerisque id velit. Phasellus iaculis ullamcorper risus, in sagittis tellus. Aenean varius ex eu dolor euismod molestie. Fusce mollis bibendum lectus, at placerat tellus dapibus eget. Nam aliquet elit et augue cursus pulvinar. Aliquam pellentesque maximus bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius ut augue et congue. Vivamus non est dolor. Donec luctus faucibus libero, in pharetra turpis volutpat a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc semper vehicula ex et fringilla. Mauris eleifend arcu ac nunc tincidunt, et tristique mi posuere. Aliquam non velit diam.

      In vel vestibulum turpis, nec dapibus urna. Vestibulum aliquam pulvinar tellus, quis gravida nisi vestibulum ac. Pellentesque sollicitudin et felis in efficitur. Nulla mattis elit nisl, vel sollicitudin turpis lacinia et. Nam sit amet feugiat enim. Nunc aliquam nibh dapibus, feugiat massa sit amet, laoreet nunc. Nunc hendrerit magna elit, at lacinia lectus dictum in. Vivamus vehicula condimentum purus eget varius. Quisque quis nibh tincidunt, dapibus ante quis, laoreet nisl. Nulla elementum mollis tellus porttitor imperdiet.`,

  },
  {
    id: 6,
    scoring: [
      { name: 'Sincerité', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Honnêteté', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Hypocrisie', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Sagesse', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Sources', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Arguments', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Agressivité', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Colère', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Manipilation', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Mensonge', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Faits', value: Math.floor(Math.random() * 100) + 2},
      { name: 'Objectivité', value: Math.floor(Math.random() * 100) + 2},
    ],
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum viverra justo vitae lorem rutrum porttitor. Nullam purus diam, iaculis eu sapien sed, imperdiet efficitur purus. Mauris erat nulla, feugiat nec sapien ut, blandit viverra ligula. Vestibulum posuere pretium nulla. Donec aliquam interdum faucibus. Nam pharetra tellus quis malesuada vulputate. Nulla gravida, lectus vel sagittis finibus, lacus est auctor ligula, et hendrerit tellus dui in odio.

      Cras aliquam cursus rhoncus. Aliquam rhoncus nunc velit, non maximus mauris euismod at. Sed vitae ex euismod massa rhoncus blandit. Phasellus mi lectus, pretium eu scelerisque nec, sodales sed tellus. Etiam iaculis ultrices dui. Aliquam feugiat nibh eu porta efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut congue leo sed eros ultrices, non tempor neque porttitor. Nulla facilisi. Sed semper nisi libero, et bibendum augue volutpat eu. Fusce nec molestie mauris, at ornare ligula. Morbi ac est ipsum. Cras ultricies efficitur eros, sit amet faucibus erat aliquet eu. Pellentesque sapien lorem, varius vitae felis sollicitudin, bibendum accumsan magna. Fusce mollis nulla sed justo efficitur, in accumsan diam interdum.

      Integer euismod faucibus tellus sit amet commodo. Pellentesque fringilla felis fermentum imperdiet ornare. Suspendisse posuere massa tincidunt, vestibulum lorem at, iaculis urna. Integer faucibus libero mi, id ullamcorper urna aliquet eget. Aenean ut iaculis lacus. Phasellus laoreet sem vitae lacus dignissim, eu porta velit molestie. Etiam sodales, nunc at ornare dictum, orci dui laoreet neque, sed cursus nisl enim non leo. Maecenas id risus lectus. Fusce felis enim, venenatis sed odio eu, volutpat scelerisque lectus. Ut et tincidunt dolor. Donec sollicitudin elit eget suscipit aliquet. Aenean tristique, nisi eu accumsan feugiat, eros ligula viverra lacus, quis pellentesque massa arcu sed augue. Aliquam faucibus ullamcorper lorem sit amet bibendum. Etiam consequat porttitor accumsan. Fusce sit amet condimentum dolor. Vivamus fermentum dapibus nisl, eu dapibus tortor bibendum at.

      Etiam ac suscipit dolor. Cras ac libero vitae augue faucibus iaculis nec vel justo. Proin id neque sem. Nam non augue tempus dolor lacinia tincidunt. Etiam vitae mauris pharetra, blandit massa sit amet, placerat nunc. Nunc eu sapien eu est euismod mollis. Suspendisse id efficitur nulla. Curabitur pulvinar in mauris non pretium. Cras pretium dolor eu eros porta blandit. Ut id suscipit lorem, at imperdiet ante. Proin diam nulla, venenatis a facilisis sit amet, ultrices vitae eros. Ut enim velit, finibus non suscipit eu, condimentum ultrices dui. Integer blandit quam erat. Vivamus varius lacinia mi vitae varius.

      Vestibulum aliquam iaculis lectus, sit amet placerat dolor porttitor sit amet. Phasellus imperdiet sit amet nunc a feugiat. Pellentesque lectus urna, mollis dictum pharetra a, cursus eu massa. Ut eget elementum ante. Proin pretium maximus ex. Quisque lacinia dolor quis molestie placerat. Fusce mauris nisi, lacinia at molestie luctus, commodo sit amet mi. Sed aliquet porttitor dapibus. Vivamus cursus cursus magna, feugiat rhoncus leo vulputate nec. Aenean feugiat et ligula sed consequat.

      Duis eu est leo. Sed volutpat magna vel enim lacinia molestie. Ut pellentesque mi sit amet ipsum pharetra, ac commodo est scelerisque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum porta convallis nisl, eu mollis turpis pharetra eget. Morbi non leo augue. Fusce porttitor libero ac consequat lobortis. Fusce non finibus dui. Proin id nisl faucibus, laoreet augue maximus, bibendum dolor. Aenean tincidunt fermentum hendrerit. Phasellus quis varius urna. Donec dignissim maximus blandit. Praesent faucibus posuere quam quis scelerisque. Suspendisse viverra consectetur lacus, at lobortis quam dapibus sed. Pellentesque est eros, tincidunt vitae vestibulum non, tristique sodales est.

      Suspendisse eu nunc non diam ultrices mattis a a erat. Donec commodo dui et mi finibus, et condimentum arcu fringilla. Mauris vestibulum lobortis mi ac tristique. Nunc sit amet ullamcorper dolor. Duis porttitor ante eget placerat pulvinar. Nunc sit amet diam neque. Aenean molestie mi ante, et viverra massa mattis non. Duis mattis gravida urna.

      Maecenas quis viverra enim. Aliquam erat volutpat. Vivamus feugiat tincidunt sapien at pharetra. Maecenas sed purus eget orci pulvinar porttitor eu ac lorem. Morbi quis nunc magna. Nulla in ante ac erat ullamcorper vehicula. Donec non neque eget ipsum aliquet gravida in et est. Integer ornare a nisl vitae tristique. Ut ultricies ultrices hendrerit. Ut rhoncus tellus neque.

      Curabitur felis lectus, venenatis tempor fringilla eget, scelerisque id velit. Phasellus iaculis ullamcorper risus, in sagittis tellus. Aenean varius ex eu dolor euismod molestie. Fusce mollis bibendum lectus, at placerat tellus dapibus eget. Nam aliquet elit et augue cursus pulvinar. Aliquam pellentesque maximus bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer varius ut augue et congue. Vivamus non est dolor. Donec luctus faucibus libero, in pharetra turpis volutpat a. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc semper vehicula ex et fringilla. Mauris eleifend arcu ac nunc tincidunt, et tristique mi posuere. Aliquam non velit diam.

      In vel vestibulum turpis, nec dapibus urna. Vestibulum aliquam pulvinar tellus, quis gravida nisi vestibulum ac. Pellentesque sollicitudin et felis in efficitur. Nulla mattis elit nisl, vel sollicitudin turpis lacinia et. Nam sit amet feugiat enim. Nunc aliquam nibh dapibus, feugiat massa sit amet, laoreet nunc. Nunc hendrerit magna elit, at lacinia lectus dictum in. Vivamus vehicula condimentum purus eget varius. Quisque quis nibh tincidunt, dapibus ante quis, laoreet nisl. Nulla elementum mollis tellus porttitor imperdiet.`,

  },
];




export const threadSingle = {
  title: 'Pourquoi la vie ?',
  
  categories: [
    { name: 'politique'},
    { name: 'informations'}
  ],
  messages: [
    authorMessage,
    ...messages,
  ],


}

