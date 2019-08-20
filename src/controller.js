const appName = 'helloWorldApp'
const controllerName = `${appName}:controller`
const appService = SYMPHONY.services.register(controllerName)

SYMPHONY.remote.hello().then(() => {
  SYMPHONY.application
  .register(appName, [ 'modules', 'applications-nav' ], [ controllerName ])
  .then((response) => {
    const modulesService = SYMPHONY.services.subscribe('modules')
    const navService = SYMPHONY.services.subscribe('applications-nav')

    navService.add('my-app-nav', 'Hello World', controllerName)

    appService.implement({
      select: () => {
        modulesService.show(
          'helloWorldApp',
          { title: 'Hello World App' },
          controllerName,
          'https://localhost:8080/index.html',
          { 'canFloat': true }
        )
      },
    })
  })
})
