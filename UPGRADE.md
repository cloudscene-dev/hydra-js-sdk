## To re-generate the Hydra SDK, please use the following command
```
openapi-generator generate -g javascript -i https://raw.githubusercontent.com/ory/hydra/v1.0.0-rc.10/docs/api.swagger.json -o ./ --additional-properties useES6=true
```

Alos we need update the version number in the package.json file