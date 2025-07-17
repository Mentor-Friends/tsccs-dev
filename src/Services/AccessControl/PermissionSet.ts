export enum PermissionSet {
  None = 0,
  Read = 1 << 0,
  Write = 1 << 1,
  Execute = 1 << 2,
  Delete = 1 << 3,
}

export function getPermissionSetFromStrings(
  permissions: string[],
): PermissionSet {
  let result = PermissionSet.None
  for (const perm of permissions) {
    switch (perm) {
      case 'read':
        result |= PermissionSet.Read
        break
      case 'write':
        result |= PermissionSet.Write
        break
      case 'execute':
        result |= PermissionSet.Execute
        break
      case 'delete':
        result |= PermissionSet.Delete
        break
    }
  }
  return result
}
