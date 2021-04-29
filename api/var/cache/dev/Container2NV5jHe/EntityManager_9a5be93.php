<?php

namespace Container2NV5jHe;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/lib/Doctrine/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder1930b = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializeraccc6 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties010fb = [
        
    ];

    public function getConnection()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getConnection', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getMetadataFactory', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getExpressionBuilder', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'beginTransaction', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->beginTransaction();
    }

    public function getCache()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getCache', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getCache();
    }

    public function transactional($func)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'transactional', array('func' => $func), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->transactional($func);
    }

    public function commit()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'commit', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->commit();
    }

    public function rollback()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'rollback', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getClassMetadata', array('className' => $className), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'createQuery', array('dql' => $dql), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'createNamedQuery', array('name' => $name), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'createQueryBuilder', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'flush', array('entity' => $entity), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'clear', array('entityName' => $entityName), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->clear($entityName);
    }

    public function close()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'close', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->close();
    }

    public function persist($entity)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'persist', array('entity' => $entity), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'remove', array('entity' => $entity), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'refresh', array('entity' => $entity), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'detach', array('entity' => $entity), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'merge', array('entity' => $entity), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getRepository', array('entityName' => $entityName), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'contains', array('entity' => $entity), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getEventManager', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getConfiguration', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'isOpen', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getUnitOfWork', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getProxyFactory', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'initializeObject', array('obj' => $obj), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'getFilters', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'isFiltersStateClean', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'hasFilters', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return $this->valueHolder1930b->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializeraccc6 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolder1930b) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder1930b = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder1930b->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, '__get', ['name' => $name], $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        if (isset(self::$publicProperties010fb[$name])) {
            return $this->valueHolder1930b->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder1930b;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder1930b;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, '__set', array('name' => $name, 'value' => $value), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder1930b;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder1930b;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, '__isset', array('name' => $name), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder1930b;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder1930b;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, '__unset', array('name' => $name), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder1930b;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder1930b;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, '__clone', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        $this->valueHolder1930b = clone $this->valueHolder1930b;
    }

    public function __sleep()
    {
        $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, '__sleep', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;

        return array('valueHolder1930b');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializeraccc6 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializeraccc6;
    }

    public function initializeProxy() : bool
    {
        return $this->initializeraccc6 && ($this->initializeraccc6->__invoke($valueHolder1930b, $this, 'initializeProxy', array(), $this->initializeraccc6) || 1) && $this->valueHolder1930b = $valueHolder1930b;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder1930b;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder1930b;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
